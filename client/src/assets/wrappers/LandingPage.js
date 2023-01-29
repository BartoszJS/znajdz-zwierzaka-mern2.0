import styled from "styled-components";
import backgroundBanner from "../images/dog1.jpg";

const Wrapper = styled.main`
  #newest {
    padding-bottom: 40px;
  }
  .yes {
    color: black;
  }
  nav {
    margin: 0 auto;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: #0a0;
  }
  .main-banner {
    width: 100%;
    background: url(${backgroundBanner});
    background-size: cover;
    background-position: right;
    font-size: 40px;
    color: white;
    text-shadow: 1px 1px 5px #ffffff;
  }

  .znajdzText1 {
    font-size: 50px;
    font-weight: 500;
    color: white;
  }
  .znajdzText2 {
    font-size: 22px;
    text-shadow: none;
    font-weight: 400;
    color: white;
    text-shadow: 1px 1px 5px #ffffff;
    width: 100%;
    max-width: 450px;
  }
  .main-cont {
    text-align: left;
    height: 100vh;
    position: relative;
  }
  .main-content {
    padding-top: 20vh;
  }
  .arrow-div {
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-arrow-down {
    color: black;
    background: #00b300;
    display: inline-block;
    width: min-content;
    white-space: nowrap;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 24px;
    padding-top: 5px;
    vertical-align: middle;
    text-transform: uppercase;
    box-shadow: var(--box-shadow);
    border-radius: 500px;
    font-size: 30px;
    width: 70px;
    height: 70px;
    -webkit-animation-duration: 1s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-arrow-down:hover {
    color: #fff;
    background: #006800;
    display: inline-block;
    width: min-content;
    white-space: nowrap;
    border: 1px solid transparent;
    border-radius: 5px;
    line-height: 1.7;
    font-size: 36px;
    vertical-align: middle;
    text-transform: uppercase;
    box-shadow: var(--box-shadow);
    border-radius: 500px;
    padding-top: 5px;
    font-size: 30px;
    width: 70px;
    height: 70px;
    transition: 0.3s;
    animation-name: bounce;
    -moz-animation-name: bounce;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
  @media (max-width: 992px) {
    .main-content {
      text-align: center;
    }
    .znajdzText1 {
      font-size: 40px;
    }
    .znajdzText2 {
      font-size: 20px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
export default Wrapper;
