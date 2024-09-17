import React, { useState } from 'react';
import EmailInput from '../Fields/email-input';
import PasswordInput from '../Fields/password-input';
import Button from "../../Button/Button";
import {usePopup} from "../../../providers/popupcontext";
import {sighupUser} from "../../../../_lib/api/authService";
import {storeToken} from "../../../../_lib/helpers/jwt";
import {useNavigate} from "react-router-dom";

interface SignupFormProps {
  setCurrentForm: React.Dispatch<React.SetStateAction<'login' | 'signup' | 'forgotPassword'>>;
}

const SignupForm: React.FC<SignupFormProps> = ({ setCurrentForm }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const { openPopup } = usePopup();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add signup logic here
    if (password === confirmPassword) {
      console.log({ email, password });
    } else {
      openPopup("Passwords do not match", 'Info');
    }

    try {
      // Call your login logic here
      const response = await sighupUser(email, password);
      // Check the response status
      if (response.status === 200) {
        openPopup('Successfully logged in!', 'Success');

        storeToken(response.data.token);
        navigate('/dashboard')
      } else if (response.status === 201) {
        openPopup(response.data.message, 'Info');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const styles = {
    form: {
      width: '80%',
      maxWidth: '500px'
    },
    altbuttons: {
      display: "flex",
      marginTop: "50px",
      gap: "5px",
      alignItems: "center"
    },
    tagline: {
      width: '100%',
      paddingRight: '10px',
      margin: 0,
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Sign up</h2>
      <EmailInput email={email} setEmail={setEmail} />
      <PasswordInput password={password} setPassword={setPassword} />
      <PasswordInput password={confirmPassword} setPassword={setConfirmPassword} isConfirm={true} />
      <Button
        label={"SIGN UP"}
        onClick={handleSubmit}
        stylePreset={"login-main"}
      />
      <div style={styles.altbuttons}>
        <p style={styles.tagline}>Already have an account?</p>
        <Button
          label={"LOG IN"}
          onClick={() => setCurrentForm("login")}
          stylePreset={"login-alt"}
        />
      </div>
    </form>
  );
};

export default SignupForm;
