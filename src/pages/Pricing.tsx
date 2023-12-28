import React from 'react'
import PriceCard from '../components/PriceCard';
import BannerTwo from '../components/BannerTwo';
import '../styles/Price.css'
import Footer from '../components/Footer';

const Pricing: React.FC = () => {
  const proFeatures = [
    { label: 'Video quality', value: 'Good' },
    { label: 'Resolution', value: '481p' },
    { label: 'Screen you can watch', value: '1' },
    { label: 'Cancel anytime', value: '' },
  ];
  const standardFeatures = [
    { label: 'Video quality', value: 'Better' },
    { label: 'Resolution', value: '1080p' },
    { label: 'Screen you can watch', value: '2' },
    { label: 'Cancel anytime', value: '' },
  ];

  const premiumFeatures = [
    { label: 'Video quality', value: 'Best' },
    { label: 'Resolution', value: '4K+HDR' },
    { label: 'Screen you can watch', value: '4' },
    { label: 'Cancel anytime', value: '' },
  ];

  return (
    <div className='priceSection'>
      <BannerTwo children={<h1>Our Plan</h1>}/>
      <div className='priceContainer'>
        <div className='title'>
          <h4>OUR PRICING PLANS</h4>
          <h1>Our Pricing Strategy</h1>
          <div></div>
        </div>
        <div className='listPrice'>
          <PriceCard type='Pro' price='7.99' frequency='Monthly' features={proFeatures} />
          <PriceCard type='Standard' price='9.99' frequency='Monthly' features={proFeatures} />
          <PriceCard type='Premium' price='11.99' frequency='Monthly' features={proFeatures} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
