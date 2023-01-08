import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  margin-bottom: 4rem;

  .singleanimal-top {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-top: 120px;
    h5 {
      letter-spacing: 0;
    }
  }
  .info-div {
  }

  .img {
    width: 500px;
    height: 300px;
    display: grid;
    place-items: center;
    background-position: center;
    object-fit: cover;
    object-position: center;
    border-radius: var(--borderRadius);

    margin-right: 2rem;
  }
  @media screen and (max-width: 992px) {
    .singleanimal-top {
      grid-template-columns: 1fr;
    }
    .img {
      width: 100%;
      max-width: 500px;
      height: 100%;
      margin-bottom: 1rem;
    }
    .cont {
      width: 100%;
    }
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
      color: var(--grey-400);
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
    border-bottom: 1px solid var(--grey-100);
    grid-template-columns: 0.5fr 0.5fr;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
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
  .content-modal {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    justify-content: center;
    align-items: center;
  }
  .content-modal-inside {
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  &:hover .actions {
    visibility: visible;
  }
`;

export default Wrapper;
