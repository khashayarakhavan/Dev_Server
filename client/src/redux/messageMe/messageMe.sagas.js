import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  sendClientRichTextMessageToServerSuccess, 
  sendClientRichTextMessageToServerFailure,
  callToApiSuccess,
  callToApiFailure,
} from "./messageMe.actions";
import axios from 'axios';

import MessageMeActionTypes from "./messageMe.types";



export function* CallToAPI({ payload: { URL, data }}) {
  try {
    console.log("👉 HiiiIIIiii! from messageMe SAGA");
    const response = yield axios.post(URL, {data: data});
    // const response = yield axios.post(URL, {data: "dalam kalti :-p "});
    console.log("👉 Returned data:", response);
    // yield put(callToApiSuccess(response));
    yield put(sendClientRichTextMessageToServerSuccess(true));
    
    // setTimeout(() => {
    //   put(callToApiSuccess(response));
    // }, 4000);
  } catch (error) {
    console.log(`😱 Axios request failed with status: `, error.status);
    console.log(`😱 and the message is : `, error.message);
    yield put(sendClientRichTextMessageToServerFailure(true));
    // yield put(callToApiFailure(error));

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

