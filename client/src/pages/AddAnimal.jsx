import axios from "axios";
import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/AddAnimal";
import { FormRow, FormRowSelect, Alert } from "../components";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const AddAnimal = () => {
  const navigate = useNavigate();
  const [navigateState, setNavigateState] = useState(false);
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    provinceOptions,
    handleChange,
    clearValues,
    createAnimal,
    uploadPhoto,
    editAnimal,
    uploadImage,
    idZw,
    clearId,
  } = useAppContext();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [rase, setRase] = useState("");
  const [description, setDescription] = useState("");
  const [province, setProvince] = useState("mazowieckie");
  const [city, setCity] = useState("");
  const [dateOfLoss, setDateOfLoss] = useState("");

  const handleInputName = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setName(e.target.value);
    handleChange({ name, value });
  };
  const handleInputRase = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRase(e.target.value);
    handleChange({ name, value });
  };
  const handleInputDescription = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDescription(e.target.value);
    handleChange({ name, value });
  };
  const handleInputProvince = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProvince(e.target.value);
    handleChange({ name, value });
  };
  const handleInputDateOfLoss = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDateOfLoss(e.target.value);
    handleChange({ name, value });
  };
  const handleInputCity = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCity(e.target.value);
    handleChange({ name, value });
  };

  const handleAnimalInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !rase || !city) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editAnimal();
      return;
    }

    createAnimal();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const animal = {
      name,
      rase,
      dateOfLoss,
      province,
      city,
      description,
      image,
    };
    createAnimal(animal);
    setTimeout(() => {
      setNavigateState(true);
    }, 2000);
  };

  useEffect(() => {
    if (idZw !== "") {
      navigate(`/animals/${idZw}`);
      window.location.reload();
      clearId();
    } else {
      navigate(`/dodaj-zwierze`);
    }
  }, [navigateState]);

  // useEffect(() => {
  //   if (idZw !== "") {
  //     navigate(`/animals/${idZw}`);
  //     clearId();
  //   } else {
  //     navigate(`/dodaj-zwierze`);
  //   }
  // }, [idZw]);

  const handlePhoto = (e) => {
    setImage(e.target.files[0].name);
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    console.log(formData);
    uploadImage(formData);
  };

  const handleClear = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <div className='cont'>
        <h3>{isEditing ? "Edytuj zwierzaka" : "Dodaj zwierzaka"}</h3>
        {showAlert && <Alert />}
        <form onSubmit={onSubmit}>
          <div className='grid-form'>
            <div>
              <div className='form-div'>
                <label>Imię:</label>
                <input
                  className='form-row'
                  onChange={handleInputName}
                  type='text'
                  value={name}
                  name='name'
                />
              </div>
              <div className='form-div'>
                <label>Miasto:</label>
                <input
                  className='form-row'
                  onChange={handleInputCity}
                  type='text'
                  value={city}
                  name='city'
                />
              </div>
              <div className='form-div'>
                <label>Data zaginięcia:</label>
                <input
                  className='form-row'
                  onChange={handleInputDateOfLoss}
                  type='date'
                  value={dateOfLoss}
                  name='dateOfLoss'
                />
              </div>
            </div>
            <div>
              <div className='form-div'>
                <label>Rasa:</label>
                <input
                  className='form-row'
                  onChange={handleInputRase}
                  type='text'
                  value={rase}
                  name='rase'
                />
              </div>
              <div className='form-div'>
                <label>Województwo:</label>

                <select className='form-select-custom' onChange={handleChange}>
                  {provinceOptions.map((itemValue, index) => {
                    return (
                      <option key={index} value={itemValue}>
                        {itemValue}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className='form-div'>
                <label>Dodaj zdjęcie:</label>
                <div className='form-div-input'>
                  <input
                    className='form-div-input-file'
                    onChange={handlePhoto}
                    type='file'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='form-div'>
            <label>Opis:</label>
            <textarea
              rows='3'
              className='form-textArea'
              type='text'
              name='description'
              value={description}
              placeholder='Może tu być kolor, znaki szczególne zwierzaka lub szczegóły zdarzenia'
              onChange={handleInputDescription}
            />
          </div>
          <div className='div-buttons'>
            <button className='button-add' type='submit'>
              DODAJ
            </button>
            <button
              className='button-clear'
              type='button'
              onClick={handleClear}
            >
              WYCZYŚĆ
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddAnimal;
