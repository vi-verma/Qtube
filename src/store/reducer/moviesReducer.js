import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movieList: {
        list: [],
        page: 0, 
        total_pages: 0, 
        total_results: 0 
    },
    searchMoviesList: {
        list: [],
        page: 0, 
        total_pages: 0, 
        total_results: 0 
    }
}

export const moviesSlice = createSlice({
    name: 'moviesList',
    initialState,
    reducers: {
        getMovieList: (state, actions) => {
            state.movieList.list = [...state.movieList.list, ...actions.payload.results]
            state.movieList.page = actions.payload.page
            state.movieList.total_pages = actions.payload.total_pages
            state.movieList.total_results = actions.payload.total_results
        }, 
        getSearchMovieList: (state, actions) => {
            state.searchMoviesList.list = [...state.searchMoviesList.list, ...actions.payload.results]
            state.searchMoviesList.page = actions.payload.page
            state.searchMoviesList.total_pages = actions.payload.total_pages
            state.searchMoviesList.total_results = actions.payload.total_results
        },
        resetSearchState: (state, action) => {
            state.searchMoviesList = {
                list: [],
                page: 0, 
                total_pages: 0, 
                total_results: 0 
            }
        }
    },

})

// Action creators are generated for each case reducer function
export const { getMovieList, getSearchMovieList, resetSearchState } = moviesSlice.actions;

export default moviesSlice.reducer;