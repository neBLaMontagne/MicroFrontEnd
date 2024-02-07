import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>Mon Application</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À Propos</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center'
  },
  navList: {
    listStyleType: 'none',
    padding: '0'
  },
  navItem: {
    display: 'inline',
    margin: '0 10px'
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none'
  }
};

export default Header;
