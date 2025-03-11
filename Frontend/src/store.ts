import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "./slices/userSlices/userAuthSlice";
import adminReducer from "./slices/adminSlices/adminAuthSlice";
//making browsers local storage to persistantly sotre the store state
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key : 'root',
    storage,

};
//combining both reducers
const rootReducer = combineReducers({
    userAuth : userReducer,
    adminAuth : adminReducer,
});

//creating a persisted reducre
const persistedReducer  = persistReducer(persistConfig,rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware({serializableCheck: false,}),
});

export const persistor = persistStore(store);

// TypeScript types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;