import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
	name: 'post',
	initialState: {
		posts: undefined,
		isLoading: false,
	},
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},
		setPost(state, action) {
			(state.isLoading = false), (state.posts = action.payload.posts);
		},
	},
});

export const { startLoading, setPost } = postSlice.actions;
