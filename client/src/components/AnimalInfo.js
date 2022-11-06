import React from 'react';
import Wrapper from '../assets/wrappers/AnimalInfo';

const AnimalInfo = ({ icon, text, labelText }) => {
  return (
    <Wrapper>
      <span className='labelText'>{labelText}</span>
      <div className='grid'>
        <span className='icon'>{icon}</span>
        <span className='text'>{text}</span>
      </div>
    </Wrapper>
  );
};

export default AnimalInfo;
