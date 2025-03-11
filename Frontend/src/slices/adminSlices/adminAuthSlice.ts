import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Admin {
    id : string | null;
    name : string | null;
    email : string | null;
    isLoggedIn : boolean;
    role : string | null;
};

const initialState : Admin = {
    id : null,
    name : null,
    email : null,
    isLoggedIn : false,
    role : null,
};

const adminAuthSlice = createSlice({
    name : 'adminAuth',
    initialState,
    reducers : {
        setAdmin : (state, action:PayloadAction<{id:string,name:string,emil:string}>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.emil;
            state.isLoggedIn = true;
            state.role = 'admin';
        },
        logoutAdmin : (state) => {
            state.id = null;
            state.name = null;
            state.email = null;
            state.isLoggedIn = false;
            state.role = null;
        }
    }
});

export const{setAdmin,logoutAdmin} = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
