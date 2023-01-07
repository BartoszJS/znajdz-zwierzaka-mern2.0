import React, { useEffect, useState } from "react";
import Animal from "./Animal";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Wrapper from "../assets/wrappers/AnimalContainer";
import { Link } from "react-router-dom";

const AnimalsLanding = () => {
  const { getAnimalsLanding, animals, isLoading, totalAnimals } =
    useAppContext();

  useEffect(() => {
    getAnimalsLanding();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      {totalAnimals !== 0 ? (
        <div className='cont'>
          <h3>Najnowsze zwięrzęta: </h3>
          <div className='jobs'>
            {animals.map((animal) => {
              return (
                <Link key={animal._id} to={`/animals/${animal._id}`}>
                  <Animal key={animal._id} {...animal} />
                </Link>
              );
            })}
          </div>
          <div className='center'>
            <Link to='/wszystkie-zwierzaki'>
              <button className='btn btn-zobacz'>ZOBACZ WSZYSTKIE</button>
            </Link>
          </div>
        </div>
      ) : (
        <Loading center />
      )}
    </Wrapper>
  );
};

export default AnimalsLanding;
