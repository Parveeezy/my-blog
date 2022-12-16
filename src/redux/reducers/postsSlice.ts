import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type PostType = {
    id: string,
    title: string,
    description: string
}

export interface PostsState {
    posts: Array<PostType>
}

const initialState: PostsState = {
    posts: [{
        id: '0',
        title: 'Hello',
        description: 'world'
    }]
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        posts:
    }
})