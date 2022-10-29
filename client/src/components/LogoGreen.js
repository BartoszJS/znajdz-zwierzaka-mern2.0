import logo from '../assets/images/icon192green.png';

import React from 'react';

const LogoGreen = () => {
  return (
    <div className='logo'>
      <img src={logo} alt='znajdz' className='logoImg' />
      {/* {color ? '#00AA00' : '#000000'} */}
    </div>
  );
};

export default LogoGreen;
