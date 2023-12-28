import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../styles/PriceCard.css'
import Btn from './Btn';
interface PriceCardProps {
  type: string;
  price: string;
  frequency: string;
  features: { label: string; value: string }[];
}

const PriceCard: React.FC<PriceCardProps> = ({ type, price, frequency, features }) => {
  return (
    <div className='priceCard'>
      <div className={'priceType'}>{type}</div>
      <div className=''>
        <div className='price'>
          <div className='priceAmount'>${price}</div>
          <div className='priceFrequency'>{frequency}</div>
        </div>
        {features.map((feature, index) => (
          <div className='feature' key={index}>
            <div className='featureLabel'><FontAwesomeIcon icon={faCheck} />{feature.label}</div>
            <div className='featureValue'>{feature.value}</div>
          </div>
        ))}
      </div>
      <Btn title='Buy Now' url=''/>

  </div>
  
  );
};

export default PriceCard;
