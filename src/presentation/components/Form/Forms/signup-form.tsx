import React, { useState } from 'react';
import EmailInput from '../Fields/email-input';
import PasswordInput from '../Fields/password-input';
import Button from "../../Button/Button";

interface SignupFormProps {
  setCurrentForm: React.Dispatch<React.SetStateAction<'login' | 'signup' | 'forgotPassword'>>;
}

const SignupForm: React.FC<SignupFormProps> = ({ setCurrentForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add signup logic here
    if (password === confirmPassword) {
      console.log({ email, password });
    } else {
      alert("Passwords do not match");
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
