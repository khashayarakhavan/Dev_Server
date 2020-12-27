import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import VegeloperPageActionTypes from "./vegeloperPage.types";


export function* CallToAPI({ payload: { URL, obj } }) {
  try {
    const response = yield axios.post(URL, obj);
    console.log("👉 Returned data:", response);
  } catch (error) {
    console.log(`😱 Axios request failed: ${error}`);
    // yield put(signInFailure(error));
  }
}

export function* onSendDataToServer() {
  yield takeLatest(VegeloperPageActionTypes.SEND_DATA_SERVER_START, CallToAPI);
}

export function* userSagas() {
  yield all([
    call(onSendDataToServer),
  ]);
}
