import React from 'react';
import Template from '../components/template';
import cardPackImage from '../img/qunxiongtaodong.jpg';
import boardImage from '../img/gonggaolan.jpg';
import storyImage from '../img/huoshaochibi.jpg';
import eventImage from '../img/event.jpg';

const HomePage = () => {
  return (
    <Template>
      <div style={styles.pageContainer}>
        <div style={styles.grid}>
          <div style={styles.card}>
            <img src={cardPackImage} alt="Heroes of the Three Kingdoms" style={styles.image} />
            <h3 style={styles.cardTitle}>New Card Pack: The heroes fight against Dong</h3>
            <p style={styles.cardText}>
            Explore the latest card series, which includes famous heroes from the Three Kingdoms period. Behind the card pack is the story of the famous 18 princes in the Three Kingdoms period who jointly crusade against Dong Zhuo, the prime minister who usurped the Han Dynasty.
            </p>
          </div>
          <div style={styles.card}>
            <img src={boardImage} alt="Notice Board" style={styles.image} />
            <h3 style={styles.cardTitle}>Notice Board</h3>
            <p style={styles.cardText}>
              Stay updated with the latest news and announcements about the Three Kingdoms card game.
            </p>
          </div>
          <div style={styles.card}>
            <img src={storyImage} alt="Battle of Red Cliffs" style={styles.image} />
            <h3 style={styles.cardTitle}>Famous Story: Battle of Red Cliffs</h3>
            <p style={styles.cardText}>
              Learn about one of the most famous stories of the Three Kingdoms period: Battle of Red Cliffs.
            </p>
          </div>
          <div style={styles.card}>
            <img src={eventImage} alt="Grand Tournament" style={styles.image} />
            <h3 style={styles.cardTitle}>Event</h3>
            <p style={styles.cardText}>
              Participate in activities to win generous rewards
            </p>
          </div>
        </div>
      </div>
    </Template>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '#faf3dc',
    padding: '20px 40px',
    boxSizing: 'border-box',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gap: '20px',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#d9a874',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    objectFit: 'contain',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#4a3314',
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '0.9rem',
    color: '#4a3314',
    lineHeight: '1.5',
  },
};


export default HomePage;
