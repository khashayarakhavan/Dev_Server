import { all, call } from 'redux-saga/effects';
import { cartSagas } from './cart/cart.sagas';
import { contentSagas } from './content/content.sagas';
import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
// import { vegeloperSagas } from './vegeloperPage/vegeloperPage.sagas';
import {vegSagas} from './vegeloperPage/vegeloperPage.sagas';

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas), call(contentSagas), call(vegSagas)]);
}

