import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({   //it takes object that contains slice configuration
    name: 'gpt',
    initialState: {
        showGptSearch : false
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
    },
});

export const {toggleGptSearchView} = gptSlice.actions;    //extract actions from gptSlice
export default gptSlice.reducer;