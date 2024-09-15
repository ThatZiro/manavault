import React from 'react';

const RememberMe = ({ rememberMe, setRememberMe }) => {
  return (
    <div className="remember-me-wrapper">
      <label className="checkBox">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <div className="transition"></div>
      </label>
      <label htmlFor="rememberMe">Remember me</label>
    </div>
  );
};

export default RememberMe;
