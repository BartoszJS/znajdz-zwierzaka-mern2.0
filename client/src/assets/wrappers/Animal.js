import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--backgroundColor);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  color: black;

  h5 {
    text-transform: none;
  }

  .cont {
    margin-top: 2rem;
  }

  header {
    background: var(--white);
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;

    h5 {
      letter-spacing: 0;
      text-transform: none;
    }
  }

  .img {
    width: 83%;
    height: 200px;
    display: grid;
    place-items: center;
    background-position: center;
    object-fit: cover;
    object-position: center;
    border-radius: var(--borderRadius);

    margin-right: 2rem;
  }
  .info {
    word-wrap: break-word;
    overflow: hidden;
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: #555555;
      letter-spacing: var(--letterSpacing);
    }
  }
  .pending {
    background: #fcefc7;
    color: #e9b949;
  }
  .interview {
    background: #e0e8f9;
    color: #647acb;
  }
  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }
  .content {
    padding: 1rem 1.5rem;
    background: var(--white);
    grid-template-columns: 0.5fr 0.5fr;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    margin-left: 10%;

    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
  }
  footer {
    margin-top: 1rem;
  }

  .actions {
    display: grid;
    grid-template-columns: 0.5fr;
    grid-gap: 20px;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    text-align: center;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
    text-align: center;
  }
  &:hover .actions {
    visibility: visible;
  }
`;

export default Wrapper;
