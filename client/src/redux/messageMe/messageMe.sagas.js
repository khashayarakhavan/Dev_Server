import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import MessageMeActionTypes from "./messageMe.types";



export function* CallToAPI({ payload: { URL, data }}) {
  try {
    console.log("👉 HiiiIIIiii! from messageMe SAGA");
    const response = yield axios.post(URL, {data: data});
    // const response = yield axios.post(URL, {data: "dalam kalti :-p "});
    console.log("👉 Returned data:", response);
  } catch (error) {
    console.log(`😱 Axios request failed with status: `, error.status);
    console.log(`😱 and the message is : `, error.message);

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

