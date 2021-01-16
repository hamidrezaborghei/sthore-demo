import * as actionTypes from './actionTypes';

export const getAll = payload => {
  return {
    type: actionTypes.POSTS_GETALL,
    payload: payload,
  };
};

export const getAllStart = () => {
  return {
    type: actionTypes.POSTS_GETALL_START,
  };
};

export const getAllSuccess = payload => {
  return {
    type: actionTypes.POSTS_GETALL_SUCCESS,
    payload: payload,
  };
};

export const getAllFail = error => {
  return {
    type: actionTypes.POSTS_GETALL_FAIL,
    error: error,
  };
};

export const single = payload => {
  return {
    type: actionTypes.POSTS_SINGLE,
    payload: payload,
  };
};

export const singleStart = () => {
  return {
    type: actionTypes.POSTS_SINGLE_START,
  };
};

export const singleSuccess = payload => {
  return {
    type: actionTypes.POSTS_SINGLE_SUCCESS,
    payload: payload,
  };
};

export const singleFail = error => {
  return {
    type: actionTypes.POSTS_SINGLE_FAIL,
    error: error,
  };
};

export const create = payload => {
  return {
    type: actionTypes.POSTS_CREATE,
    payload: payload,
  };
};

export const createStart = () => {
  return {
    type: actionTypes.POSTS_CREATE_START,
  };
};

export const createSuccess = payload => {
  return {
    type: actionTypes.POSTS_CREATE_SUCCESS,
    payload: payload,
  };
};

export const createFail = error => {
  return {
    type: actionTypes.POSTS_CREATE_FAIL,
    error: error,
  };
};

export const update = payload => {
  return {
    type: actionTypes.POSTS_UPDATE,
    payload: payload,
  };
};

export const updateStart = () => {
  return {
    type: actionTypes.POSTS_UPDATE_START,
  };
};

export const updateSuccess = payload => {
  return {
    type: actionTypes.POSTS_UPDATE_SUCCESS,
    payload: payload,
  };
};

export const updateFail = error => {
  return {
    type: actionTypes.POSTS_UPDATE_FAIL,
    error: error,
  };
};

export const remove = payload => {
  return {
    type: actionTypes.POSTS_REMOVE,
    payload: payload,
  };
};

export const removeStart = () => {
  return {
    type: actionTypes.POSTS_REMOVE_START,
  };
};

export const removeSuccess = payload => {
  return {
    type: actionTypes.POSTS_REMOVE_SUCCESS,
    payload: payload,
  };
};

export const removeFail = error => {
  return {
    type: actionTypes.POSTS_REMOVE_FAIL,
    error: error,
  };
};
