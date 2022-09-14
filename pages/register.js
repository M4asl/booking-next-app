import Layout from '../components/layout/Layout';

import { getSession } from 'next-auth/react';
import Register from '../components/auth/Register';

export default function LoginPage() {
  return (
    <Layout title="Login">
      <Register />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
