import React, { useEffect } from "react";
import SingleAnimal from "./SingleAnimal";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Animal from "./Animal";
import moment from "moment";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/UsersAnimals";
import AnimalInfo from "./AnimalInfo";
import { FaLocationArrow, FaCity, FaCalendarAlt } from "react-icons/fa";
import { GiPoland } from "react-icons/gi";

const UsersAnimals = () => {
  const {
    animals,
    isLoading,
    page,
    totalAnimals,
    getUsersAnimals,
    setEditAnimal,
    deleteAnimal,
  } = useAppContext();

  useEffect(() => {
    getUsersAnimals();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      <div className='cont'>
        <h5>Liczba dodanych zwierząt: {totalAnimals}</h5>
        <div className='jobs'>
          {animals.map((animal) => {
            return (
              <div className='animalCont' key={animal._id}>
                <header>
                  <div className='img-div'>
                    <img
                      className='img'
                      src={`uploads/${animal.image}`}
                      alt=''
                    />
                  </div>
                  <div className='info'>
                    <h5>{animal.name}</h5>
                    <p>{animal.rase}</p>
                  </div>
                  <footer>
                    <div className='actions'>
                      <Link
                        to='/edytuj-zwierze'
                        className='btn edit-btn'
                        onClick={() => setEditAnimal(animal._id)}
                      >
                        Edytuj
                      </Link>
                      <Link
                        type='button'
                        className='btn delete-btn'
                        onClick={() => deleteAnimal(animal._id)}
                      >
                        Usuń
                      </Link>
                    </div>
                  </footer>
                </header>
                <div className='content'>
                  <div className='content-center'>
                    <AnimalInfo
                      icon={<FaLocationArrow />}
                      text={animal.city}
                      labelText='Miasto:'
                    />
                    <AnimalInfo
                      icon={<GiPoland />}
                      text={animal.province}
                      labelText='Województwo:'
                    />
                    <AnimalInfo
                      icon={<FaCalendarAlt />}
                      text={moment(animal.createdAt).format("ll")}
                      labelText='Data dodania:'
                    />
                    <AnimalInfo
                      icon={<FaCalendarAlt />}
                      text={moment(animal.dateOfLoss).format("ll")}
                      labelText='Data zaginięcia:'
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default UsersAnimals;
