import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import VegeloperPageActionTypes from "./vegeloperPage.types";


// export function* CallToAPI({ payload: { URL, obj } }) {
//   try {
//     console.log('dalam kalti from SAGA!!!');
//     // axios.post(URL, obj);
//     // const userRef = yield call(
//     //   createUserProfileDocument,
//     //   userAuth,
//     //   additionalData
//     // );
//     console.log("👉 Returned data:", response);
//   } catch (error) {
//     console.log(`😱 Axios request failed: ${error}`);
//     // yield put(signInFailure(error));
//   }
// }

export function* CallToAPI({ payload: { URL, data }}) {
  try {
    console.log("👉 HiiiIIIiii! ");
    const response = yield axios.post(URL, {data: data});
    console.log("👉 Returned data:", response);
  } catch (error) {
    console.log(`😱 Axios request failed: ${error}`);
    console.log(error.message);

  }
}

export function* onSendDataToServer() {
  yield takeLatest(VegeloperPageActionTypes.SEND_DATA_SERVER_START, CallToAPI);
}

export function* vegSagas() {
  yield all([
    call(onSendDataToServer)
  ]);
}

