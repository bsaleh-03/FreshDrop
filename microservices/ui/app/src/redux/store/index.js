import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import rootReducer from "redux/reducers";

// Redux Persist
const persistConfig = {
    key: 'root',
    storage,
};

// Setup Persist Reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Persist Store
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persist = persistStore(store);

export default {
    store,
    persist
};