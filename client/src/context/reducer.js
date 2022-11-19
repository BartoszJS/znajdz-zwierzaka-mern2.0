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
  CREATE_ANIMAL_BEGIN,
  CREATE_ANIMAL_ERROR,
  CREATE_ANIMAL_SUCCESS,
  CLEAR_VALUES,
  GET_ANIMAL_BEGIN,
  GET_ANIMAL_SUCCESS,
  UPLOAD_PHOTO_BEGIN,
  UPLOAD_PHOTO_ERROR,
  UPLOAD_PHOTO_SUCCESS,
  GET_ONEANIMAL_SUCCESS,
  GET_ONEANIMAL_BEGIN,
  SET_EDIT_ANIMAL,
  DELETE_ANIMAL_BEGIN,
  EDIT_ANIMAL_BEGIN,
  EDIT_ANIMAL_SUCCESS,
  EDIT_ANIMAL_ERROR,
  CLEAR_FILTERS,
  CHANGE_PAGE,
} from './actions';

import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Wprowadź wszystkie dane',
    };
  }
  if (action.type === PROTECTED_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Wymagane jest zalogowanie...',
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'Rejestracja pomyślna, trwa przekierowanie...',
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'Trwa logowanie...',
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }
  if (action.type === SHOW_TOGGLE_PROFILE) {
    return {
      ...state,
      toggleProfile: !state.toggleProfile,
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'Profil zaktualizowany...',
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      editAnimalId: '',
      isEditing: false,
      description: '',
      name: '',
      rase: '',
      province: 'mazowieckie',
      city: '',
      dateOfLoss: '',
      image: '',
    };

    return {
      ...state,
      ...initialState,
    };
  }
  if (action.type === CREATE_ANIMAL_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_ANIMAL_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Zwierze zostało dodane',
    };
  }
  if (action.type === CREATE_ANIMAL_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_ANIMAL_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === GET_ANIMAL_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      animals: action.payload.animals,
      totalAnimals: action.payload.totalAnimals,
      numOfPages: action.payload.numOfPages,
    };
  }

  if (action.type === UPLOAD_PHOTO_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPLOAD_PHOTO_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Zwierze zostało dodane',
    };
  }
  if (action.type === UPLOAD_PHOTO_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_ONEANIMAL_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === GET_ONEANIMAL_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      animal: action.payload.animal,
    };
  }

  if (action.type === SET_EDIT_ANIMAL) {
    const animal = state.animals.find(
      (animal) => animal._id === action.payload.id
    );
    const { _id, name, rase, description, province, city, dateOfLoss, image } =
      animal;
    return {
      ...state,
      isEditing: true,
      editAnimalId: _id,
      name,
      rase,
      description,
      province,
      city,
      dateOfLoss,
      image,
    };
  }
  if (action.type === DELETE_ANIMAL_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_ANIMAL_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === EDIT_ANIMAL_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Edycja pomyślna',
    };
  }
  if (action.type === EDIT_ANIMAL_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      city: '',
      searchProvince: 'Wszystkie',
      sort: 'Najnowsze',
    };
  }
  if (action.type === CHANGE_PAGE) {
    return {
      ...state,
      page: action.payload.page,
    };
  }

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
