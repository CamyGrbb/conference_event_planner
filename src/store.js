// store.js
import { configureStore } from '@reduxjs/toolkit';
import { avSlice } from './avSlice';
import { venueSlice } from './venueSlice';
import { mealsSlice } from './mealsSlice';

export default configureStore({
    reducer: {
        venue: venueSlice.reducer,
        av: avSlice.reducer,
        meals: mealsSlice.reducer
    },
});
