import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Animal";
import AnimalInfo from "./AnimalInfo";
import { FaLocationArrow, FaCity, FaCalendarAlt } from "react-icons/fa";
import { GiPoland } from "react-icons/gi";

const Animal = ({
  _id,
  name,
  rase,
  description,
  province,
  city,
  image,
  dateOfLoss,
  createdAt,
}) => {
  const { setEditAnimal, deleteAnimal } = useAppContext();

  let dateOfCreate = moment(createdAt);
  let dateOfLossNice = moment(dateOfLoss);
  dateOfCreate = dateOfCreate.format("ll");
  dateOfLossNice = dateOfLossNice.format("ll");
  return (
    <Wrapper>
      <header>
        <div className='img-div'>
          <img className='img' src={image} alt='' />
        </div>
        <div className='info'>
          <h4>{name}</h4>
          <p>{rase}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <AnimalInfo
            icon={<FaLocationArrow />}
            text={city}
            labelText='Miasto:'
          />
          <AnimalInfo
            icon={<GiPoland />}
            text={province}
            labelText='Województwo:'
          />
          <AnimalInfo
            icon={<FaCalendarAlt />}
            text={dateOfCreate}
            labelText='Data dodania:'
          />
          <AnimalInfo
            icon={<FaCalendarAlt />}
            text={dateOfLossNice}
            labelText='Data zaginięcia:'
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Animal;
