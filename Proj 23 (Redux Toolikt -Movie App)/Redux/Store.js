import {configureStore} from '@reduxjs/toolkit'
import moviesReducers from './MovieSlice'

export const Store=configureStore({
    reducer:{
        movies:moviesReducers
    }
})