import styled from "styled-components";

const Wrapper = styled.section`
  .modal {
    font-size: 20px;
  }
  .modal > .header {
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 24px;
    text-align: center;
    padding: 5px;
  }
  .modal > .content {
    width: 100%;
    padding: 10px 5px;
  }
  .modal > .actions {
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
  }
  .modal > .close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 4px 0px;
    line-height: 20px;
    right: 10px;
    top: 16px;
    font-size: 50px;
    background: red;
    color: white;
    border-radius: 3px;
    border: 0;
  }
`;
export default Wrapper;
