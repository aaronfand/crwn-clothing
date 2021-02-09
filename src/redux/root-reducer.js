import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist' ;
//import storage from 'react-persist/lib/storage';
import storageSession from 'redux-persist/es/storage/session'

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer' ;
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


const persistConfig = {
	key: 'root',
	storage: storageSession,
	whitelist: ['cart', 'directory', 'shop']
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);