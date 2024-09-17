import React, { createContext, useState, useContext } from 'react';
import Popup from '../components/Popup/Popup';

// Define the shape of the popup context
interface PopupContextType {
  openPopup: (message: string, type: 'Success' | 'Error' | 'Info', timeout?: number) => void;
}

// Create the Popup Context
const PopupContext = createContext<PopupContextType | undefined>(undefined);

// Create a provider for the Popup Context
export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState<'Success' | 'Error' | 'Info'>('Info');
  const [popupTimeout, setPopupTimeout] = useState(3000); // Default timeout of 3 seconds

  const openPopup = (message: string, type: 'Success' | 'Error' | 'Info', timeout = 3000) => {
    setPopupMessage(message);
    setPopupType(type);
    setPopupTimeout(timeout);
    setShowPopup(true);
  };

  return (
    <PopupContext.Provider value={{ openPopup }}>
      {children}
      {showPopup && (
        <Popup
          message={popupMessage}
          type={popupType}
          timeout={popupTimeout}
          onClose={() => setShowPopup(false)}
        />
      )}
    </PopupContext.Provider>
  );
};

// Custom hook to use the PopupContext
export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};
