import React, {useEffect, useState} from 'react';
import LoginForm from '../components/Form/Forms/login-form';
import { LogoIconComponent } from '../components/Logo/logo';
import manavaultImage from '../../assets/manavault_image.png';
import SignupForm from '../components/Form/Forms/signup-form';
import ForgotPasswordForm from '../components/Form/Forms/forgot-password-form';

import'../components/Form/Fields/inputfield.css'
import {useNavigate} from "react-router-dom";
import {isAuthenticated} from "../../_lib/helpers/jwt";
import ResetPasswordForm from "../components/Form/Forms/reset-password-form";

interface LoginPageProps {
  initialForm?: 'login' | 'signup' | 'forgotPassword' | 'resetPassword';
}

const Login: React.FC<LoginPageProps> = ({ initialForm = 'login' }) => {
  const [currentForm, setCurrentForm] = useState<'login' | 'signup' | 'forgotPassword' | 'resetPassword'>(initialForm as 'login' | 'signup' | 'forgotPassword' | 'resetPassword');
  const styles = {
    'login-page': {
      display: 'flex',
      height: '100vh',
      flexDirection: 'row',
    },
    'login-image-container': {
      flex: 1,
      display: 'flex',
    },
    'login-panel': {
      flex: 1,
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    'login-image': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderTopRightRadius: '50px',
      borderBottomRightRadius: '50px',
    },
    'login-logo': {
      position: 'absolute',
      right: '50px',
      top: '50px',
    },
    'error-text': {
      color: '#bd4e4e',
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if(isAuthenticated()) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const renderForm = () => {
    switch (currentForm) {
      case 'login':
        return <LoginForm setCurrentForm={setCurrentForm} />;
      case 'signup':
        return <SignupForm setCurrentForm={setCurrentForm} />;
      case 'forgotPassword':
        return <ForgotPasswordForm setCurrentForm={setCurrentForm} />;
      case 'resetPassword':
        return <ResetPasswordForm setCurrentForm={setCurrentForm}/>;
      default:
        return <LoginForm setCurrentForm={setCurrentForm} />;
    }
  };

  return (
    <>
      <div style={styles['login-page'] as React.CSSProperties}>
        <div style={styles['login-image-container'] as React.CSSProperties}>
          <img
            src={manavaultImage as string}
            style={styles['login-image'] as React.CSSProperties}
            alt="Login Background"
          />
        </div>
        <div style={styles['login-panel'] as React.CSSProperties}>
          <div style={styles['login-logo'] as React.CSSProperties}>
            <LogoIconComponent />
          </div>
          {renderForm()}
        </div>
      </div>
    </>
  );
};

export default Login;
