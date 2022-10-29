import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Nie znaleziono strony.</h3>
        <h5>
          Powrót do <Link to="/">strony głównej</Link>
        </h5>
      </div>
    </Wrapper>
  );
};

export default Error;
