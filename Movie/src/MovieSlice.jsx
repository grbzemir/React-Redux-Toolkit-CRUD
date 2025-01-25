import { createSlice } from '@reduxjs/toolkit';

//Başlangıç state'ini oluşturduk
const initialState = {
    movies: []
};

const movieSlice = createSlice({

    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies.push(action.payload);
        },

        removeMovie: (state, action) => {
            // state.movies = state.movies.filter(movie => movie.id !== action.payload);
        },
    },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;