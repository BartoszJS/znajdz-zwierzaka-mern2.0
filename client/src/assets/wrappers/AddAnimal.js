import styled from "styled-components";

const Wrapper = styled.article`
  padding-top: 120px;
  background-color: white;

  box-shadow: var(--shadow-2);
  .grid-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }
  .form-div {
    display: flex;
    flex-direction: column;
  }
  .form-div-input {
    border: 1px solid #b0b0b0;
    border-radius: 5px;
    height: 40px;
    background-color: #f0f4f8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-div-input-file {
    padding-left: 10px;
    width: 100%;
  }
  .form-row {
    border: 1px solid #b0b0b0;
    border-radius: 5px;
    height: 40px;
    background-color: #f0f4f8;
  }
  .form-textArea {
    border: 1px solid #b0b0b0;
    border-radius: 5px;
    background-color: #f0f4f8;
    resize: none;
  }
  .form-select-custom {
    border: 1px solid #b0b0b0;
    border-radius: 5px;
    background-color: #f0f4f8;
    height: 40px;
    margin-bottom: 15px;
  }
  .div-buttons {
    margin-top: 30px;
    padding-bottom: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }
  .button-add {
    color: black;
    background-color: #00bb00;
    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: var(--shadow-2);
  }
  .button-clear {
    color: black;
    background-color: #b0b0b0;

    padding: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: var(--shadow-2);
  }

  @media screen and (max-width: 992px) {
    .grid-form {
      grid-template-columns: 1fr;
    }
  }
`;

export default Wrapper;
