import styled from "styled-components";

const Wrapper = styled.nav`
  .header {
    margin: 0 auto;
    height: 100px;
    background-color: #00b300;
    position: fixed;
    width: 100%;
    opacity: 0.9;
    z-index: 1;
  }

  .header-content {
    width: 200px;
    cursor: pointer;
    color: black;
  }
  .header .logo {
    float: left;
  }
  .header .navbars {
    float: right;
    padding-top: 35px;
    color: black;
  }
  .place {
    gap: 0 0.5rem;
    color: black;
    padding-right: 30px;
  }
  .place:hover {
    color: white;
    transition: 0.2s;
  }
  .profile_button {
    gap: 0 0.5rem;
    color: black;
    display: flex;
  }
  .btn-container {
    position: relative;
    float: right;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
    padding: 3px 10px 3px 10px;
  }

  .dropdown {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    background: #009500;
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
    font-size: 15px;
  }

  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: black;
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
    display: flex;
    gap: 0 0.5rem;
  }
  .hamburger {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    display: none;
    color: black;
  }
  .hamdiv {
    width: 100%;
    background-color: #00b300;
    text-align: center;
    display: none;
    padding-bottom: 5px;
    padding-top: 5px;
    -webkit-box-shadow: inset 0px 22px 32px -37px rgba(66, 68, 90, 1);
    -moz-box-shadow: inset 0px 22px 32px -37px rgba(66, 68, 90, 1);
    box-shadow: inset 0px 22px 32px -37px rgba(66, 68, 90, 1);
  }
  .hamplace {
    color: black;
  }
  .hamicon {
    cursor: pointer;
  }

  @media screen and (max-width: 992px) {
    .hamburger {
      display: flex;
      justify-content: flex-end;
      padding-top: 40px;
      padding-bottom: 30px;
      font-size: 28px;
    }
    .content {
      display: none;
    }
    .hamdiv {
      display: block;
    }
  }
`;
export default Wrapper;
