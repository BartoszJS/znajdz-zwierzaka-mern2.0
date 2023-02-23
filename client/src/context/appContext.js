import React, { useReducer, useContext, useState } from "react";
import axios from "axios";

import reducer from "./reducer";
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
  UPLOAD_PHOTO_BEGIN,
  UPLOAD_PHOTO_ERROR,
  UPLOAD_PHOTO_SUCCESS,
  GET_ONEANIMAL_BEGIN,
  GET_ONEANIMAL_SUCCESS,
  SET_EDIT_ANIMAL,
  DELETE_ANIMAL_BEGIN,
  EDIT_ANIMAL_BEGIN,
  EDIT_ANIMAL_SUCCESS,
  EDIT_ANIMAL_ERROR,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  GET_ANIMAL_LANDING_BEGIN,
  GET_ANIMAL_LANDING_SUCCESS,
  UPLOAD_BEGIN,
  UPLOAD_SUCCESS,
  UPLOAD_ERROR,
  CLEAR_ID,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  toggleProfile: false,
  editAnimalId: "",
  isEditing: false,
  description: "",
  animalUser: "",
  name: "",
  rase: "",
  _id: "",
  provinceOptions: [
    "dolnośląskie",
    "kujawsko-pomorskie",
    "lubelskie",
    "lubuskie",
    "łódzkie",
    "małopolskie",
    "mazowieckie",
    "opolskie",
    "podkarpackie",
    "podlaskie",
    "pomorskie",
    "śląskie",
    "świętokrzyskie",
    "warmińsko-mazurskie",
    "wielkopolskie",
    "zachodniopomorskie",
  ],
  province: "mazowieckie",
  city: "",
  dateOfLoss: "",
  image: "",
  animals: [],
  animal: {},
  totalAnimals: 0,
  numOfPages: 1,
  page: 1,
  searchProvince: "Wszystkie",
  sort: "Najnowsze",
  sortOptions: ["Najnowsze", "Najstarsze"],
  idZw: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  //request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
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
  const clearId = () => {
    dispatch({
      type: CLEAR_ID,
    });
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
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const showToggleProfile = () => {
    dispatch({ type: SHOW_TOGGLE_PROFILE });
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
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
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
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
      const { data } = await authFetch.patch("/auth/updateUser", currentUser);

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

  const getAnimals = async () => {
    const { page, city, searchProvince, sort } = state;
    let url = `/animals/wszystkie-zwierzaki?page=${page}&province=${searchProvince}&sort=${sort}`;
    if (city) {
      url = url + `&city=${city}`;
    }

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
  const getUsersAnimals = async () => {
    let url = `/animals/profile`;

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
  const getAnimalsLanding = async () => {
    let url = `/animals`;

    dispatch({ type: GET_ANIMAL_LANDING_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const { animals, totalAnimals, numOfPages } = data;
      dispatch({
        type: GET_ANIMAL_LANDING_SUCCESS,
        payload: { animals, totalAnimals, numOfPages },
      });
    } catch (error) {
      console.log(error.response);
    }
    clearAlert();
  };

  const setEditAnimal = (id) => {
    dispatch({ type: SET_EDIT_ANIMAL, payload: { id } });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const editAnimal = async () => {
    dispatch({ type: EDIT_ANIMAL_BEGIN });
    try {
      const { name, rase, description, province, city, dateOfLoss, image } =
        state;
      await authFetch.patch(`/animals/${state.editAnimalId}`, {
        name,
        rase,
        description,
        province,
        city,
        dateOfLoss,
        image,
      });
      dispatch({ type: EDIT_ANIMAL_SUCCESS });
      clearValues();
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_ANIMAL_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const deleteAnimal = async (animalId) => {
    dispatch({ type: DELETE_ANIMAL_BEGIN });
    try {
      await authFetch.delete(`/animals/${animalId}`);
      getUsersAnimals();
    } catch (error) {
      console.log(error.response);
    }
  };

  const createAnimal = async (animal) => {
    dispatch({ type: CREATE_ANIMAL_BEGIN });
    try {
      const response = await authFetch.post("/animals", animal);
      console.log(response.data.animal._id);
      console.log(typeof response.data.animal._id);
      dispatch({
        type: CREATE_ANIMAL_SUCCESS,
        payload: { msg: response.data.animal._id },
      });
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

  const uploadPhoto = async (e) => {
    dispatch({ type: UPLOAD_PHOTO_BEGIN });

    let imageValue;
    const url = "/animals";
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const {
        data: {
          image: { src },
        },
      } = await authFetch.post(`${url}/uploads`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      imageValue = src;
      console.log(imageValue);
      dispatch({ type: UPLOAD_PHOTO_SUCCESS });
    } catch (error) {
      if (error.response.status !== 401)
        return dispatch({
          type: UPLOAD_PHOTO_ERROR,
          payload: { msg: error.response.data.msg },
        });
    }
    clearAlert();
  };

  const getAnimal = async (id) => {
    let url = `/animals/${id}`;

    dispatch({ type: GET_ONEANIMAL_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const { animal, animalUser } = data;
      dispatch({
        type: GET_ONEANIMAL_SUCCESS,
        payload: { animal, animalUser },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

  const uploadImage = async (formData) => {
    dispatch({ type: UPLOAD_BEGIN });
    try {
      await axios.post("/api/v1/animals/uploads", formData);
      dispatch({ type: UPLOAD_SUCCESS });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: UPLOAD_ERROR });
    }
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
        uploadPhoto,
        getUsersAnimals,
        getAnimal,
        editAnimal,
        clearFilters,
        changePage,
        getAnimalsLanding,
        uploadImage,
        clearId,
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
