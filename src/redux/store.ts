import {configureStore} from '@reduxjs/toolkit';
import postReducer from './reducers/postsSlice'

export default configureStore({
    reducer: {
        posts: postReducer,
    },
});