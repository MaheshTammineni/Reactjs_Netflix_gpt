import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// import { useReducer } from "react";

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
});


export default appStore;