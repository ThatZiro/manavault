import React from 'react';
import './Button.css';

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
  onClick: () => void;
  disabled?: boolean;
  stylePreset?: ButtonStyle;
  style?: React.CSSProperties;
  type?: 'submit' | 'reset' | 'button';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, stylePreset = ButtonStyle.Main, style, type = 'button' as 'submit' | 'reset' | 'button' }) => {
  return (
    <button
      type={type}
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