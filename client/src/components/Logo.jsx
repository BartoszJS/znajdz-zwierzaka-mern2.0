import logo from "../assets/images/logoZZ.png";

import React from "react";

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo} alt='znajdz' className='logoImg' />
      {/* {color ? '#00B300' : '#000000'} */}
      <span style={{ color: "#000000" }} className='logoText1'>
        ZNAJDŹ
      </span>
      <span style={{ color: "#000000" }} className='logoText2'>
        ZWIERZAKA
      </span>
    </div>
  );
};

export default Logo;
