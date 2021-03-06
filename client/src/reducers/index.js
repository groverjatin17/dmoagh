import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import homepageReducers from './homepageReducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
};

const rootReducer = combineReducers({
    homepageReducers,
});

export default persistReducer(persistConfig, rootReducer);
