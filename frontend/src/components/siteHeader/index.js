import React from 'react';

const SiteHeader = () => {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <h1 style={styles.title}>Three Kingdoms Cards</h1>
      </div>
      <div style={styles.right}>
        <button style={styles.button}>Friends</button>
        <button style={styles.button}>Message</button>
        <button style={styles.button}>Mall</button>
        <button style={styles.button}>Personal Page</button>
        <button style={styles.button}>Market</button>
        <button style={styles.button}>Warehouse</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#b98956',
    padding: '10px 20px',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: '1.5rem',
    fontFamily: "'Georgia', serif",
    margin: 0,
  },
  right: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    backgroundColor: '#5c3b11',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontFamily: "'Arial', sans-serif",
  },
};

export default SiteHeader;
