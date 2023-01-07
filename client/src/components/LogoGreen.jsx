import logo from "../assets/images/icon192green.png";

import React from "react";

const LogoGreen = () => {
  return (
    <div className='logo'>
      <img src={logo} alt='znajdz' className='logoImg' />
      {/* {color ? '#00B300' : '#000000'} */}
    </div>
  );
};

export default LogoGreen;
