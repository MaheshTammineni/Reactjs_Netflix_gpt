import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// import { useReducer } from "react";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

//add reducers in store
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer
    },
});


export default appStore;