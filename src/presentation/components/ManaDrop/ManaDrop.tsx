import React, { useEffect, useState } from 'react';
import blackManaSVG from '../../../assets/svg/manalogos/black-mana.svg';
import blueManaSVG from '../../../assets/svg/manalogos/blue-mana.svg';
import greenManaSVG from '../../../assets/svg/manalogos/green-mana.svg';
import redManaSVG from '../../../assets/svg/manalogos/red-mana.svg';
import whiteManaSVG from '../../../assets/svg/manalogos/white-mana.png';
import './manadrop.css';

const manaLogos = [blackManaSVG, blueManaSVG, greenManaSVG, redManaSVG, whiteManaSVG];

type ManaLogoProps = {
  src: string;
  size: number;
  delay: number;
  left: number;
};

const ManaLogo: React.FC<ManaLogoProps> = ({ src, size, delay, left }) => {
  return (
    <img
      src={src}
      alt="mana"
      className="mana-logo"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

const ManaFall: React.FC = () => {
  const [logos, setLogos] = useState<ManaLogoProps[]>([]);

  useEffect(() => {
    // Function to generate random values for mana logo props
    const generateLogoProps = (): ManaLogoProps => {
      const randomLogo = manaLogos[Math.floor(Math.random() * manaLogos.length)];
      const randomSize = Math.random() * 40 + 30; // Random size between 30 and 70px
      const randomDelay = Math.random() * 5; // Random delay between 0 and 5 seconds
      const randomLeft = Math.random() * 90; // Random left position between 0% and 90%
      return {
        src: randomLogo,
        size: randomSize,
        delay: randomDelay,
        left: randomLeft,
      };
    };

    // Create new mana logos at intervals
    const interval = setInterval(() => {
      setLogos((prev) => [...prev, generateLogoProps()]);
    }, 5000);

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  return (
    <div className="mana-fall-container">
      {logos.map((logoProps, index) => (
        <ManaLogo key={index} {...logoProps} />
      ))}
    </div>
  );
};

export default ManaFall;