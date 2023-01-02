import React from 'react';
import Wrapper from '../assets/wrappers/ProfileData';
import { useAppContext } from '../context/appContext';
import { RiSettings2Fill, RiSettings2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useAppContext();

  return (
    <Wrapper>
      <div className='cont'>
        <div className='form'>
          <h3>Profil użytkownika</h3>
          <Link className='place' to='/profile/edit'>
            <h3>
              Edytuj <RiSettings2Fill />
            </h3>
          </Link>

          <div>
            <span>Imię:</span> <br></br>
            <p className='values'>{user.name}</p>
          </div>
          <div>
            <span>Nazwisko:</span> <br></br>
            <p className='values'>{user.surname}</p>
          </div>
          <div>
            <span>Numer telefonu:</span> <br></br>
            <p className='values'>{user.phoneNumber}</p>
          </div>
          <div>
            <span>E-mail:</span> <br></br>
            <p className='values'>{user.email}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
