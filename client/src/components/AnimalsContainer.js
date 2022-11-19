import React, { useEffect } from 'react';
import Animal from './Animal';
import { useAppContext } from '../context/appContext';
import Loading from './Loading';
import Wrapper from '../assets/wrappers/AnimalContainer';
import { Link } from 'react-router-dom';
import PageBtnContainer from './PageBtnContainer';

const AnimalsContainer = () => {
  const {
    getAnimals,
    animals,
    isLoading,
    page,
    totalAnimals,
    city,
    searchProvince,
    sort,
    numOfPages,
  } = useAppContext();

  useEffect(() => {
    const delayForTyping = setTimeout(() => {
      getAnimals();
    }, 800);

    return () => clearTimeout(delayForTyping);
    // eslint-disable-next-line
  }, [page, city, searchProvince, sort]);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      <div className='cont'>
        <h5>Liczba zwierząt: {totalAnimals}</h5>
        <div className='jobs'>
          {animals.map((animal) => {
            return (
              <Link key={animal._id} to={`/animals/${animal._id}`}>
                <Animal key={animal._id} {...animal} />
              </Link>
            );
          })}
        </div>
        {numOfPages > 1 && <PageBtnContainer />}
      </div>
    </Wrapper>
  );
};

export default AnimalsContainer;
