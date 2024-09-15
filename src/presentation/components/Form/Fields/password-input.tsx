import React from 'react';

const PasswordInput = ({ password, setPassword, isConfirm }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={isConfirm ? "confirm-password" : "password"}>
        {isConfirm ? "Confirm Password" : "Password"}
      </label>
      <div className="input-field-wrapper">
        <svg className="input-logo"  xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 448 512">
          <path
            d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/>
        </svg>
        <input
          type="password"
          id={isConfirm ? "confirm-password" : "password"}
          placeholder={isConfirm ? "Confirm your password" : "Enter your password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PasswordInput;
