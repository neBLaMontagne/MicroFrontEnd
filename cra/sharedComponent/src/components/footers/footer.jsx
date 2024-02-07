import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Ceci est le footer de l'application.</p>
      <p>Tous droits réservés © 2024</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%'
  }
};

export default Footer;
