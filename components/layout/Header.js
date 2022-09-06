import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="navbar row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <div className="navbar-brand">
            <Link href="/">
              <img
                style={{ cursor: 'pointer' }}
                src="/images/BookLogo.png"
                alt="BookRoom"
              />
            </Link>
          </div>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center">
          <Link href="/login">
            <a
              className="btn  px-4 text-white login-header-btn float-right"
              style={{ backgroundColor: '#EEA86C' }}
            >
              Login
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
