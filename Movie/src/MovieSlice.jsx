import { createSlice } from '@reduxjs/toolkit';

//Başlangıç state'ini oluşturduk
const initialState = {
    movies: [{ id: 1, name: "Harry Potter" },
    { id: 2, name: "The Lord of the Rings" },
    { id: 3, name: "The Matrix" },
    ],
};
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const newMovie = {
                id: state.movies.length > 0 ? state.movies[state.movies.length - 1].id + 1 : 1,
                name: action.payload,
            };
            state.movies.push(newMovie);
        },

        removeMovie: (state, action) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload);
        },
    },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;