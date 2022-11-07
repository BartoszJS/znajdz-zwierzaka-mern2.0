import React, { useEffect } from 'react';
import Wrapper from '../assets/wrappers/LandingPage.js';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AnimalsContainer from '../components/AnimalsContainer';

const Landing = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/v1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <div className='main-banner'>
        <div className='main-cont cont'>
          <div className='main-content'>
            <h1 className='znajdzText1'>ZNAJDŹ ZWIERZAKA </h1>
            <p className='znajdzText2'>
              W przypadku zaginięcia zwierzęcia, <br /> możesz dodać zwierzę na
              naszą stronę.
            </p>
            <Link to='/register'>
              <button className='btn btn-glowna'> ZGŁOŚ ZAGINIĘCIE</button>
            </Link>
          </div>
          <div className='arrow-div'>
            <Link to='/register'>
              <button className='btn-arrow-down'>
                <FaArrowDown />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <AnimalsContainer />
    </Wrapper>
  );
};

export default Landing;
