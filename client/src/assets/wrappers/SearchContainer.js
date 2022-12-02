import styled from 'styled-components';

const Wrapper = styled.section`
  padding-top: 3.5rem;
  .form {
    width: 100%;
    max-width: 100%;
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 35px;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  h5 {
    font-weight: 700;
  }
  .btn-block {
    align-self: center;
    margin-top: 1rem;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
    .visible {
      display: none;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .visible {
      display: block;
    }
    .btn-block {
      margin-top: 1rem;
    }
  }
`;

export default Wrapper;
