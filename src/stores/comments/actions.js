import * as actionTypes from './actionTypes';

export const getAll = payload => {
  return {
    type: actionTypes.COMMENTS_GETALL,
    payload: payload,
  };
};

export const getAllStart = () => {
  return {
    type: actionTypes.COMMENTS_GETALL_START,
  };
};

export const getAllSuccess = payload => {
  return {
    type: actionTypes.COMMENTS_GETALL_SUCCESS,
    payload: payload,
  };
};

export const getAllFail = error => {
  return {
    type: actionTypes.COMMENTS_GETALL_FAIL,
    error: error,
  };
};
