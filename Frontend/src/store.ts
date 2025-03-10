import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
//making browsers local storage to persistantly sotre the store state
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key : 'root',
    storage,

}

const store = configureStore({
    reducer:{

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;