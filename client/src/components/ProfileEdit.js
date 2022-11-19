import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/ProfileEdit';
import { FormRow, Alert } from '.';
import { useAppContext } from '../context/appContext';
import { RiSettings2Fill, RiSettings2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const ProfileEdit = () => {
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
        <form onSubmit={handleSubmit}>
          <div className='form'>
            <h3>Edytuj użytkownika</h3>

            <Link className='place' to='/profile'>
              <div className='text'>Wróć </div>
              <div className='icon'>
                <RiSettings2Line />
              </div>
            </Link>
          </div>
          {showAlert && <Alert />}
          <div className='form'>
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
          </div>
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Proszę czekać' : 'Zapisz zmiany'}
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default ProfileEdit;
