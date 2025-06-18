import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>moviedekho.com</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    background: '#222',
    color: '#fff',
  },
  logo: {
    margin: 0,
    cursor: 'pointer',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '15px',
  },
};

export default Navbar;
