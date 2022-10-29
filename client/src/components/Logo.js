import logo from '../assets/images/logoZZ.png';

import React from 'react';

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo} alt='znajdz' className='logoImg' />
      {/* {color ? '#00AA00' : '#000000'} */}
      <span style={{ color: '#FFFFFF' }} className='logoText1'>
        ZNAJDŹ
      </span>
      <span style={{ color: '#FFFFFF' }} className='logoText2'>
        ZWIERZAKA
      </span>
    </div>
  );
};

export default Logo;
