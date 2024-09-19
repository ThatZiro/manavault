import React from 'react';
import './button.css';

enum ButtonStyle {
  Main = 'main',
  Dark = 'dark',
  Light = 'light',
  Warning = 'warning',
  LoginMain = "login-main",
  LoginAlt = "login-alt",
}

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  stylePreset?: ButtonStyle;
  style?: React.CSSProperties;
  buttonType?: 'submit' | 'reset' | 'button';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, stylePreset = ButtonStyle.Main, style, buttonType = 'button' as 'submit' | 'reset' | 'button' }) => {
  return (
    <button
      type={buttonType}
      className={`custom-button ${stylePreset}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {label}
    </button>
  );
};

export { ButtonStyle }; // Export enum for reuse
export default Button;