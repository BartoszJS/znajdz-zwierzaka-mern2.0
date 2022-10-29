import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/Job';
import AnimalInfo from './AnimalInfo';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Animal = ({
  _id,
  name,
  rase,
  description,
  province,
  city,
  dateOfLoss,
  createdAt,
}) => {
  const { setEditAnimal, deleteAnimal } = useAppContext();

  let dateOfCreate = moment(createdAt);
  let dateOfLossNice = moment(dateOfLoss);
  dateOfCreate = dateOfCreate.format('MMM Do, YYYY');
  dateOfLossNice = dateOfLossNice.format('MMM Do, YYYY');
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{name.charAt(0)}</div>
        <div className='info'>
          <h5>{name}</h5>
          <p>{rase}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <AnimalInfo icon={<FaLocationArrow />} text={city} />
          <AnimalInfo icon={<FaCalendarAlt />} text={dateOfCreate} />
          <AnimalInfo icon={<FaCalendarAlt />} text={dateOfLossNice} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Animal;
