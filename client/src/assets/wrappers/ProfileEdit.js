import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 8rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
    color: black;
  }

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .place {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .text {
    margin: 0;
    font-weight: 400;
    text-transform: capitalize;
    font-size: 1.953rem;
    color: black;
    margin-bottom: 8px;
    margin-right: 10px;
  }
  .icon {
    margin: 0;
    font-weight: 400;
    text-transform: capitalize;

    color: black;
    font-size: 1.953rem;
  }

  .form-input {
    width: 90%;
  }
  .form-row {
    margin-bottom: 0;
    margin-bottom: 1.5rem;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
