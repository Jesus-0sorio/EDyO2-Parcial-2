import { setPost, startLoading } from './PostSlice';
import axios from 'axios'

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(startLoading())
    const response = await axios.get(
			'https://jsonplaceholder.typicode.com/photos'
    );
    const data = response.data.map((post) => {
      return {
        title: post.title,
        postImage: post.url,
        id: post.id,
      };
    });
    dispatch(setPost({posts: data}))
  }
}