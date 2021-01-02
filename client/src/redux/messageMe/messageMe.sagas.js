import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import MessageMeActionTypes from "./messageMe.types";



export function* CallToAPI({ payload: { URL, data }}) {
  try {
    console.log("👉 HiiiIIIiii! ");
    const response = yield axios.post(URL, {data: data});
    console.log("👉 Returned data:", response);
  } catch (error) {
    console.log(`😱 Axios request failed: ${error}`);
  }
}

export function* onSendDataToServer() {
  yield takeLatest(MessageMeActionTypes.SEND_DATA_SERVER_START, CallToAPI);
}

export function* messageMeSagas() {
  yield all([
    call(onSendDataToServer)
  ]);
}

