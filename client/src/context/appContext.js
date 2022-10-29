import React, { useReducer, useContext } from 'react';
import axios from 'axios';

import reducer from './reducer';
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  PROTECTED_ALERT,
  LOGOUT_USER,
  SHOW_TOGGLE_PROFILE,
  UPDATE_USER_BEGIN,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_ANIMAL_BEGIN,
  CREATE_ANIMAL_ERROR,
  CREATE_ANIMAL_SUCCESS,
  GET_ANIMAL_BEGIN,
  GET_ANIMAL_SUCCESS,
} from './actions';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  toggleProfile: false,
  editAnimalId: '',
  isEditing: false,
  description: '',
  name: '',
  rase: '',
  provinceOptions: [
    'dolnośląskie',
    'kujawsko-pomorskie',
    'lubelskie',
    'lubuskie',
    'łódzkie',
    'małopolskie',
    'mazowieckie',
    'opolskie',
    'podkarpackie',
    'podlaskie',
    'pomorskie',
    'śląskie',
    'świętokrzyskie',
    'warmińsko-mazurskie',
    'wielkopolskie',
    'zachodniopomorskie',
  ],
  province: 'mazowieckie',
  city: '',
  dateOfLoss: '',
  image: '',
  animals: [],
  totalAnimals: 0,
  numOfPages: 1,
  page: 1,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: '/api/v1',
  });

  //request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  //response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      //console.log(error.response);
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const protectedAlert = () => {
    dispatch({ type: PROTECTED_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };

  const showToggleProfile = () => {
    dispatch({ type: SHOW_TOGGLE_PROFILE });
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post('/api/v1/auth/register', currentUser);
      //console.log(response);
      const { user, token } = response.data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, token } });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      //console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post('/api/v1/auth/login', currentUser);
      const { user, token } = data;
      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser);

      const { user, token } = data;

      dispatch({ type: UPDATE_USER_SUCCESS, payload: { user, token } });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };
  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const createAnimal = async () => {
    dispatch({ type: CREATE_ANIMAL_BEGIN });
    try {
      const { name, rase, description, province, city, dateOfLoss, image } =
        state;
      await authFetch.post('/animal', {
        name,
        rase,
        description,
        province,
        city,
        dateOfLoss,
        image,
      });
      dispatch({ type: CREATE_ANIMAL_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status !== 401)
        return dispatch({
          type: CREATE_ANIMAL_ERROR,
          payload: { msg: error.response.data.msg },
        });
    }
    clearAlert();
  };

  const getAnimals = async () => {
    let url = `/animals`;

    dispatch({ type: GET_ANIMAL_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const { animals, totalAnimals, numOfPages } = data;
      dispatch({
        type: GET_ANIMAL_SUCCESS,
        payload: { animals, totalAnimals, numOfPages },
      });
    } catch (error) {
      console.log(error.response);
    }
    clearAlert();
  };

  const setEditAnimal = (id) => {
    console.log(`set edit job: ${id}`);
  };

  const deleteAnimal = (id) => {
    console.log(`delete: ${id}`);
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        logoutUser,
        protectedAlert,
        showToggleProfile,
        updateUser,
        handleChange,
        clearValues,
        createAnimal,
        getAnimals,
        setEditAnimal,
        deleteAnimal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
