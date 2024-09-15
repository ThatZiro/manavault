import React, { useState } from 'react';
import EmailInput from '../Fields/email-input';
import PasswordInput from '../Fields/password-input';
import RememberMe from '../Fields/remember-me-input';
import Button from "../../Button/Button";

interface LoginFormProps {
  setCurrentForm: React.Dispatch<React.SetStateAction<'login' | 'signup' | 'forgotPassword'>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ setCurrentForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log({ email, password, rememberMe });
  };

  const styles = {
    form: {
      width: '80%',
      maxWidth: '500px'
    },
    altbuttons: {
      display : "flex",
      marginTop: "50px",
      gap: "5px",
    },
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Sign in</h2>
      <EmailInput email={email} setEmail={setEmail} />
      <PasswordInput password={password} setPassword={setPassword} />
      <RememberMe rememberMe={rememberMe} setRememberMe={setRememberMe} />
      <Button
        label={"LOG IN"}
        onClick={() => alert("Log In Button Pressed")}
        stylePreset={"login-main"}
      />
      <div style={styles.altbuttons}>
        <Button
          label={"FORGOT PASSWORD"}
          onClick={() => setCurrentForm("forgotPassword")}
          stylePreset={"login-alt"}
        />
        <Button
          label={"SIGN UP"}
          onClick={() => setCurrentForm("signup")}
          stylePreset={"login-alt"}
        />
      </div>
    </form>
  );
};

export default LoginForm;
