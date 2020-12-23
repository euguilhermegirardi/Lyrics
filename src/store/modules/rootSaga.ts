import { all, fork } from 'redux-saga/effects';
import LyricsSaga from '../modules/search/sagas/lyricsSaga';

export default function* rootSaga() {
  yield all([fork(LyricsSaga)])
};
