import React from 'react';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { FormRow, FormRowSelect, Alert } from '../components';
import { useAppContext } from '../context/appContext';

const AddAnimal = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    name,
    rase,
    description,
    provinceOptions,
    province,
    city,
    dateOfLoss,
    image,
    handleChange,
    clearValues,
    createAnimal,
  } = useAppContext();

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
      return;
    }
    createAnimal();
  };

  return (
    <Wrapper>
      <div className='cont'>
        <form className='form'>
          <h3>{isEditing ? 'Edytuj zwierzaka' : 'Dodaj zwierzaka'}</h3>
          {showAlert && <Alert />}
          <FormRow
            type='text'
            name='name'
            value={name}
            labelText='Imie'
            handleChange={handleAnimalInput}
          />
          <FormRow
            type='text'
            name='rase'
            value={rase}
            labelText='Rasa'
            handleChange={handleAnimalInput}
          />
          <FormRow
            type='text'
            name='city'
            value={city}
            labelText='Miasto'
            handleChange={handleAnimalInput}
          />
          <label htmlFor='description' className='form-label'>
            Opis
          </label>
          <textarea
            type='text'
            name='description'
            value={description}
            placeholder='Może tu być kolor, znaki szczególne zwierzaka lub szczegóły zdarzenia'
            onChange={handleAnimalInput}
          />
          <FormRowSelect
            name='province'
            value={province}
            labelText='Województwo'
            handleChange={handleAnimalInput}
            list={provinceOptions}
          />
          <FormRow
            type='date'
            name='dateOfLoss'
            value={dateOfLoss}
            labelText='Data zaginięcia'
            handleChange={handleAnimalInput}
          />
          <FormRow
            type='text'
            name='image'
            value={image}
            labelText='Image'
            handleChange={handleAnimalInput}
          />
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              OK
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddAnimal;
