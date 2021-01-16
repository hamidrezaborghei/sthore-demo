import { all, put, call, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import CommentsAPI from '../../services/comments';

function* getAll(action) {
  yield put(actions.getAllStart());
  try {
    const { postID, ...payload } = action.payload;
    const response = yield call([CommentsAPI, 'getAll'], postID ,payload);
    const data = response.data;
    yield put(actions.getAllSuccess(data));
  } catch (error) {
    yield put(actions.getAllFail(error));
  }
}

function* watchComments() {
  yield all([
    takeEvery(actionTypes.COMMENTS_GETALL, getAll),
  ]);
}

export default watchComments;
