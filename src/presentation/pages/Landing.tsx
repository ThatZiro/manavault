import React from 'react';

import Button, {ButtonStyle} from "../components/Button/Button";
import ManaFall from "../components/ManaDrop/ManaDrop";
import {useNavigate} from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    },
    landingPageContent: {
      width: '100%',
      margin: '0 auto',
      textAlign: 'center' as const,
      padding: '20px',
      background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.2), rgba(0,0,0,0.2), rgba(0,0,0,0))',
      borderRadius: '15px',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
    },
    tagline: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    description: {
      fontSize: '18px',
      lineHeight: '1.6',
      maxWidth: '750px',
    }
  };


  return (
    <>
      <div style={styles.container as React.CSSProperties}>
        <div style={styles.landingPageContent as React.CSSProperties}>
          <h1 style={styles.title}>ManaVault</h1>
          <h2 style={styles.tagline}>Unlock the Power of Your Collection with ManaVault</h2>
          <p style={styles.description}>
            ManaVault is your ultimate companion for managing your Magic: The Gathering collection.
            Easily search for cards, build powerful decks, and keep track of your collection with seamless
            integration and intuitive tools. Whether you're a casual player or a seasoned pro, ManaVault
            puts the entire MTG universe at your fingertips.
          </p>
          <Button
            label="LOGIN"
            onClick={() => navigate('/login')}
            stylePreset={ButtonStyle.Main}
            style={{width: "500px"}}
          />
        </div>
        <ManaFall/>
      </div>
    </>
  );
};

export default Landing;
