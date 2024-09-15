import React from 'react';
import SignupForm from "../components/Form/Forms/signup-form";
import {LogoIconComponent} from "../components/Logo/logo";

const SignUp: React.FC = () => {
  const styles = {
    page: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
      width: '100%'
    },
    image: {
      background: "white",
      width: "65%",
      height: "100vh",
    },
    panel: {
      width: "35%",
      height: "100vh",

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      alignSelf: 'end'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      gap: '50px',
      fontSize: '32px',
    },
  };
  return (
      <>
        <div style={styles.page as React.CSSProperties}>
          <div style={styles.image as React.CSSProperties}></div>
          <div style={styles.panel as React.CSSProperties}>
            <div style={styles.logo as React.CSSProperties}><LogoIconComponent/></div>
            <SignupForm styles={styles.form as React.CSSProperties}/>
          </div>
        </div>
      </>
  );
};

export default SignUp;