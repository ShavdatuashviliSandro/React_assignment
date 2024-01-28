import { createSlice } from '@reduxjs/toolkit';

interface MovieTypes {
    movies: any[],
    favorites: any[]
    ratings: any
}

const initialState: MovieTypes = {
    movies: [],
    favorites: [],
    ratings: {},
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
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