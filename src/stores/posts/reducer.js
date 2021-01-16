import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // GetAll
    case actionTypes.POSTS_GETALL_START:
      return {...state, isLoading: true, error: null};
    case actionTypes.POSTS_GETALL_SUCCESS:
      return {...state, isLoading: false, data: action.payload};
    case actionTypes.POSTS_GETALL_FAIL:
      return {...state, isLoading: false, error: action.error};
    // Single
    case actionTypes.POSTS_SINGLE_START:
      return {...state, isLoading: true, error: null};
    case actionTypes.POSTS_SINGLE_SUCCESS:
      return {...state, isLoading: false, data: action.payload};
    case actionTypes.POSTS_SINGLE_FAIL:
      return {...state, isLoading: false, error: action.error};
    // Create
    case actionTypes.POSTS_CREATE_START:
      return {...state, isLoading: /* true automated */ false, error: null};
    case actionTypes.POSTS_CREATE_SUCCESS:
      return {...state, isLoading: false, data: [action.payload, ...state.data]}; // not automated
    case actionTypes.POSTS_CREATE_FAIL:
      return {...state, isLoading: false, error: action.error};
    // Update
    case actionTypes.POSTS_UPDATE_START:
      return {...state, isLoading: true, error: null};
    case actionTypes.POSTS_UPDATE_SUCCESS:
      return {...state, isLoading: false, data: action.payload};
    case actionTypes.POSTS_UPDATE_FAIL:
      return {...state, isLoading: false, error: action.error};
    // Remove
    case actionTypes.POSTS_REMOVE_START:
      return {...state, isLoading: /* true automated */ false, error: null};
    case actionTypes.POSTS_REMOVE_SUCCESS:
      return {...state, isLoading: false, data: state.data.filter(d => d.id !== action.payload)}; // not automated
    case actionTypes.POSTS_REMOVE_FAIL:
      return {...state, isLoading: false, error: action.error};
    default:
      return state;
  }
};

export default reducer;
