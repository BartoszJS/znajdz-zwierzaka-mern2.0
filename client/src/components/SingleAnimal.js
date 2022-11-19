import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SingleAnimal';
import AnimalInfo from './AnimalInfo';
import { FaLocationArrow, FaCity, FaCalendarAlt } from 'react-icons/fa';
import { GiPoland } from 'react-icons/gi';
import Loading from './Loading';

const SingleAnimal = ({}) => {
  const params = useParams();
  const [flag, setFlag] = useState(false);

  const { getAnimal, isLoading, animal, setEditAnimal, deleteAnimal } =
    useAppContext();

  useEffect(() => {
    getAnimal(params.id);
  }, []);

  if (isLoading) {
    return (
      <div className='paddingTop120'>
        <Loading center />
      </div>
    );
  } else {
    return (
      <Wrapper>
        {animal[0] && (
          <div className='cont'>
            <header>
              <div className='img-div'>
                <img className='img' src={animal[0].image} alt='' />
              </div>
              <div className='info-div'>
                <div className='info'>
                  <h5>{animal[0].name}</h5>
                  <p>{animal[0].rase}</p>
                </div>
                <div className='info'>
                  <h5>Opis:</h5>
                  <p>{animal[0].description}</p>
                </div>
              </div>
            </header>
            <div className='content'>
              <div className='content-center'>
                <AnimalInfo
                  icon={<FaLocationArrow />}
                  text={animal[0].city}
                  labelText='Miasto:'
                />
                <AnimalInfo
                  icon={<GiPoland />}
                  text={animal[0].province}
                  labelText='Województwo:'
                />
                <AnimalInfo
                  icon={<FaCalendarAlt />}
                  text={moment(animal[0].createdAt).format('ll')}
                  labelText='Data dodania:'
                />
                <AnimalInfo
                  icon={<FaCalendarAlt />}
                  text={moment(animal[0].dateOfLoss).format('ll')}
                  labelText='Data zaginięcia:'
                />
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    );
  }
};

export default SingleAnimal;
