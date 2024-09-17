import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {isAuthenticated, removeToken} from "../../_lib/helpers/jwt";
import Button, {ButtonStyle} from "../components/Button/Button";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);

  const styles = {
    'header': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0px 25px',
      gap: '100px'
    },
    'logout-button': {
      width: '150px',
      height: '50px'
    }
  };

  const logoutClicked = () => {
    removeToken()
    navigate('/');
  }

  return (
    <>
      <div style={styles.header as React.CSSProperties}>
      <h1>Dashboard</h1>
      <Button
        label={"Log Out"}
        onClick={() => logoutClicked()}
        stylePreset={ButtonStyle.LoginAlt}
        style={styles["logout-button"] as React.CSSProperties}
      />
      </div>
    </>
  );
};

export default Dashboard;
