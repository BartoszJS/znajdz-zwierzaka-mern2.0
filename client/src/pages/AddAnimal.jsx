import axios from "axios";
import React, { useState } from "react";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRow, FormRowSelect, Alert } from "../components";
import { useAppContext } from "../context/appContext";

const AddAnimal = () => {
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
    console.log(animal);
    createAnimal(animal);
  };

  const handlePhoto = (e) => {
    setImage(e.target.files[0].name);
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    console.log(formData);
    uploadImage(formData);
  };

  return (
    <Wrapper>
      <div className='cont'>
        <h3>{isEditing ? "Edytuj zwierzaka" : "Dodaj zwierzaka"}</h3>
        {showAlert && <Alert />}
        <form onSubmit={onSubmit}>
          <input
            className='form-row'
            onChange={handleInputName}
            type='text'
            value={name}
            name='name'
          />
          <input
            className='form-row'
            onChange={handleInputRase}
            type='text'
            value={rase}
            name='rase'
          />
          <input
            className='form-row'
            onChange={handleInputCity}
            type='text'
            value={city}
            name='city'
          />
          <input
            className='form-row'
            onChange={handleInputProvince}
            type='text'
            value={province}
            name='province'
          />
          <input
            className='form-row'
            onChange={handleInputDateOfLoss}
            type='date'
            value={dateOfLoss}
            name='dateOfLoss'
          />
          <textarea
            rows='3'
            className='textArea'
            type='text'
            name='description'
            value={description}
            placeholder='Może tu być kolor, znaki szczególne zwierzaka lub szczegóły zdarzenia'
            onChange={handleInputDescription}
          />
          <input onChange={handlePhoto} type='file' />
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddAnimal;
