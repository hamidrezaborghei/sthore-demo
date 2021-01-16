import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // GetAll
    case actionTypes.COMMENTS_GETALL_START:
      return {...state, isLoading: true, error: null};
    case actionTypes.COMMENTS_GETALL_SUCCESS:
      return {...state, isLoading: false, data: action.payload};
    case actionTypes.COMMENTS_GETALL_FAIL:
      return {...state, isLoading: false, error: action.error};
    default:
      return state;
  }
};

export default reducer;
