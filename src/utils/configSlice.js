import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({   //it takes object that contains slice configuration
    name: 'config',
    initialState: {
        lang: "en",
    },
    reducers: {
        changeLanguage: (state,action) => {
            state.lang = action.payload;
        },
    },
});

export const {changeLanguage} = configSlice.actions;    //extract actions from configSlice
export default configSlice.reducer;