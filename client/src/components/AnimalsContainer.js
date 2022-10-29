import React, { useEffect } from 'react';
import Animal from './Animal';
import { useAppContext } from '../context/appContext';
import Loading from './Loading';
import Wrapper from '../assets/wrappers/JobsContainer';

const AnimalsContainer = () => {
  const { getAnimals, animals, isLoading, page, totalAnimals } =
    useAppContext();

  useEffect(() => {
    getAnimals();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }

  if (animals.length === 0) {
    return (
      <Wrapper>
        <h2>Brak zwierząt do wyświetlenia</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className='cont'>
        <h5>Liczba zwierząt: {totalAnimals}</h5>
        <div className='jobs'>
          {animals.map((animal) => {
            return <Animal key={animal._id} {...animal} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default AnimalsContainer;
