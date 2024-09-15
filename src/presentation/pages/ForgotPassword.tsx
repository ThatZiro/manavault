import React from 'react';
import ForgotPasswordForm from '../components/Form/Forms/reset-password-form';

const ForgotPassword: React.FC = () => {
  return (
    <div className="forgot-password-container">
      <div className="login-image"></div>
      <div className="login-panel">
        <div className="login-logo">
          <p>LOGO HERE</p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPassword;
