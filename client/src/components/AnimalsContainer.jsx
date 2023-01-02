import React, { useEffect, useState } from 'react';
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

  const [change, setChange] = useState(false);

  useEffect(() => {
    const delayForTyping = setTimeout(() => {
      getAnimals();
    }, 800);

    return () => clearTimeout(delayForTyping);
    // eslint-disable-next-line
  }, [page, city, searchProvince, sort]);

  const use = () => {
    const timer = setTimeout(() => {
      return <h3>Brak zwierzat</h3>;
    }, 2000);
    return () => clearTimeout(timer);
  };

  const noAnimals = () => {
    return (
      <div>
        <h5>Brak zwierzat</h5>
      </div>
    );
  };

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      {totalAnimals !== 0 ? (
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
      ) : (
        <Loading center />
      )}
    </Wrapper>
  );
};

export default AnimalsContainer;
