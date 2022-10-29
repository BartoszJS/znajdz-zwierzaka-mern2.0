import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { FormRow, Alert } from '../components';
import { useAppContext } from '../context/appContext';

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [surname, setSurname] = useState(user?.surname);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [email, setEmail] = useState(user?.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !surname || !phoneNumber || !email) {
      displayAlert();
      return;
    }
    updateUser({ name, email, phoneNumber, surname });
  };

  return (
    <Wrapper>
      <div className='cont'>
        <form className='form' onSubmit={handleSubmit}>
          <h3>Profil użytkownika</h3>
          {showAlert && <Alert />}
          <FormRow
            type='text'
            name='name'
            value={name}
            labelText='Imie'
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type='text'
            name='surname'
            value={surname}
            labelText='Nazwisko'
            handleChange={(e) => setSurname(e.target.value)}
          />
          <FormRow
            type='text'
            name='phoneNumber'
            value={phoneNumber}
            labelText='Numer telefonu'
            handleChange={(e) => setPhoneNumber(e.target.value)}
          />
          <FormRow
            type='text'
            name='email'
            value={email}
            labelText='E-mail'
            handleChange={(e) => setEmail(e.target.value)}
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Proszę czekać' : 'Zapisz zmiany'}
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Profile;
