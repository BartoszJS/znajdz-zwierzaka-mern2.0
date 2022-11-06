import React, { useEffect } from 'react';
import SingleAnimal from './SingleAnimal';
import { useAppContext } from '../context/appContext';
import Loading from './Loading';
import Wrapper from '../assets/wrappers/UsersAnimals';

const AnimalsContainer = () => {
  const { animals, isLoading, page, totalAnimals, getUsersAnimals } =
    useAppContext();

  useEffect(() => {
    getUsersAnimals();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      <div className='cont'>
        <h5>Liczba zwierząt: {totalAnimals}</h5>
        <div className='jobs'>
          {animals.map((animal) => {
            return <SingleAnimal key={animal._id} {...animal} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default AnimalsContainer;
