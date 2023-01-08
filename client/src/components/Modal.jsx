import React from "react";
import Popup from "reactjs-popup";
import Wrapper from "../assets/wrappers/Modal.js";
import "reactjs-popup/dist/index.css";

const Modal = ({ name, nr, email }) => {
  return (
    <Popup
      trigger={
        <button className='btn btn-zobacz'>
          {" "}
          SKONTAKTUJ SIE Z WŁAŚCICIELEM{" "}
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <Wrapper>
          <div className='modal'>
            <button className='close' onClick={close}>
              &times;
            </button>
            <div className='header'> Dane właściciela </div>
            <div className='content'>
              <p>Imie: {name}</p>
              <p>Email: {email}</p>
              <p>Nr telefonu: {nr}</p>
            </div>
            <div className='actions'></div>
          </div>
        </Wrapper>
      )}
    </Popup>
  );
};

export default Modal;
