import React, { useState, useEffect } from 'react';
import {useSearchParams} from 'react-router-dom'; // For extracting query params
import PasswordInput from "../Fields/password-input";
import Button, { ButtonStyle } from '../../Button/Button';
import {usePopup} from "../../../providers/popupcontext";
import {resetPassword} from "../../../../_lib/api/authService";

interface ResetPasswordFormProps {
  setCurrentForm: React.Dispatch<React.SetStateAction<'login' | 'signup' | 'forgotPassword' | 'resetPassword'>>;
}
const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ setCurrentForm }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Extract the token from the URL
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const { openPopup } = usePopup();

  useEffect(() => {
    if (!token) {
      setCurrentForm('login')
    }
  }, [token, setCurrentForm]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      openPopup('Passwords do not match.', 'Error');
      return;
    }

    if (token) {
      try {
        const response = await resetPassword(token, password);

        if(response && response.status === 200) {
          console.log("Success")
          openPopup("Password reset successful. You can now log in with your new password.", 'Success');
          setCurrentForm('login')
        } else if (response && response.status === 201) {
          openPopup(response.data.message, 'Info');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const styles = {
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
      gap: '5px',
    },
    form: {
      width: '80%',
      maxWidth: '500px',
    },
    errorMessage: {
      color: 'red',
      marginTop: '10px',
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Reset Password</h2>
      <p>Please enter your new password below. The link in your email is valid for a limited time.</p>

      <PasswordInput password={password} setPassword={setPassword} />
      <PasswordInput password={confirmPassword} setPassword={setConfirmPassword} isConfirm={true} />

      <div style={styles.buttonContainer}>
        <Button
          label="Reset My Password"
          onClick={() => handleSubmit}
          stylePreset={ButtonStyle.LoginMain}
        />
      </div>
    </form>
  );
};

export default ResetPasswordForm;
