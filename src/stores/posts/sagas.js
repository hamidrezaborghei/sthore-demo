import { all, put, call, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import PostsAPI from '../../services/posts';

function* getAll(action) {
  yield put(actions.getAllStart());
  try {
    const response = yield call([PostsAPI, 'getAll'], action.payload);
    const data = response.data;
    yield put(actions.getAllSuccess(data));
  } catch (error) {
    yield put(actions.getAllFail(error));
  }
}

function* single(action) {
  yield put(actions.singleStart());
  try {
    const { id, ...payload } = action.payload;
    const response = yield call([PostsAPI, 'single'], id, payload);
    const data = response.data;
    yield put(actions.singleSuccess(data));
  } catch (error) {
    yield put(actions.singleFail(error));
  }
}

function* create(action) {
  yield put(actions.createStart());
  try {
    const response = yield call([PostsAPI, 'create'], action.payload);
    const data = response.data;
    yield put(actions.createSuccess(data));
  } catch (error) {
    yield put(actions.createFail(error));
  }
}

function* update(action) {
  yield put(actions.updateStart());
  try {
    const { id, ...payload } = action.payload;
    const response = yield call([PostsAPI, 'update'], id, payload);
    const data = response.data;
    yield put(actions.updateSuccess(data));
  } catch (error) {
    yield put(actions.updateFail(error));
  }
}

function* remove(action) {
  yield put(actions.removeStart());
  try {
    const { id, ...payload } = action.payload;
    // automated:
    // const response = yield call([PostsAPI, 'remove'], id, payload);
    // const data = response.data;
    // yield put(actions.removeSuccess(id));
    
    // not automated:
    yield call([PostsAPI, 'remove'], id, payload);
    yield put(actions.removeSuccess(id));
  } catch (error) {
    yield put(actions.removeFail(error));
  }
}

function* watchPosts() {
  yield all([
    takeEvery(actionTypes.POSTS_GETALL, getAll),
    takeEvery(actionTypes.POSTS_SINGLE, single),
    takeEvery(actionTypes.POSTS_CREATE, create),
    takeEvery(actionTypes.POSTS_UPDATE, update),
    takeEvery(actionTypes.POSTS_REMOVE, remove),
  ]);
}

export default watchPosts;
