import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cart.reducer';
import contentReducer from './content/content.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import themesReducer from './themes/themes.reducer';
import userReducer from './user/user.reducer';
import vegeloperPageReducer from './vegeloperPage/vegeloperPage.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  vegeloper: vegeloperPageReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  mode: themesReducer,
  content: contentReducer,
});

export default persistReducer(persistConfig, rootReducer);
