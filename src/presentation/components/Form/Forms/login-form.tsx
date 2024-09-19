import React, { useState } from 'react';
import EmailInput from '../Fields/email-input';
import PasswordInput from '../Fields/password-input';
import RememberMe from '../Fields/remember-me-input';
import Button, { ButtonStyle } from "../../Button/Button";
import { loginUser } from "../../../../_lib/api/authService";
import { usePopup } from "../../../providers/popupcontext";
import { storeToken } from "../../../../_lib/helpers/jwt";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  setCurrentForm: React.Dispatch<React.SetStateAction<'login' | 'signup' | 'forgotPassword' | 'resetPassword'>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ setCurrentForm }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const { openPopup } = usePopup();

  const handleSubmit = async () => {

    try {
      const response = await loginUser(email, password);

      if (response && response.status === 200) {
        openPopup('Successfully logged in!', 'Success');
        storeToken(response.data.token);
        navigate('/dashboard');
      } else if (response && response.status === 201) {
        console.log(response.data.message);
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
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Sign in</h2>
      <EmailInput email={email} setEmail={setEmail} />
      <PasswordInput password={password} setPassword={setPassword} />
      <RememberMe rememberMe={rememberMe} setRememberMe={setRememberMe} />
      <Button
        label={"LOG IN"}
        buttonType={"submit"}
        stylePreset={ButtonStyle.LoginMain}
      />
      <div style={styles.altbuttons}>
        <Button
          label={"FORGOT PASSWORD"}
          onClick={() => setCurrentForm("forgotPassword")}
          stylePreset={ButtonStyle.LoginAlt}
        />
        <Button
          label={"SIGN UP"}
          onClick={() => setCurrentForm("signup")}
          stylePreset={ButtonStyle.LoginAlt}
        />
      </div>
    </form>
  );
};

export default LoginForm;
