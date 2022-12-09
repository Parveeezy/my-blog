import {createSlice} from '@reduxjs/toolkit';
import uuid from "uuid";

export const postSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addPost: (state, action) => {
            const post = {
                id: uuid(),
                title: action.payload.title,
                text: action.payload.description,
            };

            return [...state, post];
        },
    }
});

// this is for dispatch
export const {addPost} = postSlice.actions;

// this is for configureStore
export default postSlice.reducer;