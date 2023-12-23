import React from 'react';
import '../styles/BannerTwo.css';

interface BannerTwoProps {
  children: React.ReactNode;
}

const BannerTwo: React.FC<BannerTwoProps> = ({ children }) => {
  return <div className="bannerTwo">{children}</div>;
};

export default BannerTwo;
