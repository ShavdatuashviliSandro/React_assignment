import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: [],
        favorites: [],
        ratings: {},
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        addToFavorites: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter((movie) => movie.id !== action.payload.id);
        },
        setRating: (state, action) => {
            const { movieId, rating } = action.payload;
            state.ratings[movieId] = rating;
        },
    },
});

export const { setMovies, addToFavorites, removeFromFavorites, setRating } = movieSlice.actions;
export default movieSlice.reducer;