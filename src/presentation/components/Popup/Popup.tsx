import React, { useEffect } from 'react';
import './popup.css';

interface PopupProps {
  message: string;
  type: 'Success' | 'Error' | 'Info';
  timeout: number; // Time in milliseconds
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, type, timeout, onClose }) => {

  // Automatically close the popup after the specified timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, timeout);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [timeout, onClose]);

  return (
    <div className={`popup-overlay ${type.toLowerCase()}`}>
      <div className="popup-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;
