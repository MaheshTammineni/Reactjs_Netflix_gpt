import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({   //it takes object that contains slice configuration
    name: 'gpt',
    initialState: {
        showGptSearch : false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state,action) =>{
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames; //set states
            state.movieResults = movieResults;
        }, 
    },
});

export const {toggleGptSearchView,addGptMovieResult} = gptSlice.actions;    //extract actions from gptSlice
export default gptSlice.reducer;