import React, { useState } from 'react';
import EmailInput from '../Fields/email-input';
import Button, { ButtonStyle } from '../../Button/Button';
import {usePopup} from "../../../providers/popupcontext";
import {useNavigate} from "react-router-dom";
import {forgotPassword} from "../../../../_lib/api/authService";

interface ForgotPasswordFormProps {
  setCurrentForm: React.Dispatch<React.SetStateAction<'login' | 'signup' | 'forgotPassword'>>;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ setCurrentForm }) => {
  const [email, setEmail] = useState('');

  const { openPopup } = usePopup();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO Add forgot password logic here

    try {
      const response = await forgotPassword(email);

      if(response.status === 200) {
        openPopup('Password reset link sent! please check your email.', 'Success');
        setCurrentForm('login')
      } else if (response.status === 201) {
        openPopup(response.data.message, 'Info');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const styles = {
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
      gap: '5px'
    },
    form: {
      width: '80%',
      maxWidth: '500px'
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Forgot Password</h2>
      <p>If you have forgotten your password, please enter your account's email address below and click the "Reset My Password" button. You will receive an email that contains a link to set a new password.</p>
      <EmailInput email={email} setEmail={setEmail} />
      <div style={styles.buttonContainer}>
        <Button
          label="Request My Password"
          onClick={handleSubmit}
          stylePreset={ButtonStyle.LoginMain}
        />
        <Button
          label="Back"
          onClick={() => setCurrentForm('login')}
          stylePreset={ButtonStyle.LoginAlt}
        />
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
