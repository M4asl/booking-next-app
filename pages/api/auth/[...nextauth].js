import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import User from '../../../models/userModel';
import dbConnect from '../../../config/dbConnect';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        dbConnect();

        const { email, password } = credentials;

        // Check if email and password is entered
        if (!email || !password) {
          throw new Error('Please enter email or password');
        }

        // Find user in the database
        const user = await User.findOne({ email }).select(
          '+password'
        );

        if (!user) {
          throw new Error('Invalid Email or Password');
        }

        // Check if password is correct or not
        const isPasswordMatched = await user.comparePassword(
          password
        );

        if (!isPasswordMatched) {
          throw new Error('Invalid Email or Password');
        }

        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      // Persist the OAuth access_token to the token right after signin

      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async ({ session, token, user }) => {
      // Send properties to the client, like an access_token from a provider.

      session.user = token.user;
      return Promise.resolve(session);
    },
  },
});
