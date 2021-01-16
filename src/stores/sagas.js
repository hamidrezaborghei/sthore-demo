import { all } from 'redux-saga/effects';
import watchPosts from './posts/sagas';
import watchComments from './comments/sagas';

function* watchAll() {
  yield all([
    watchPosts(),
    watchComments(),
  ]);
}

export default watchAll;
