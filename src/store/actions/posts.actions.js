import axios from 'axios';

export const CREATE_POST = 'CREATE_POST';
export const GET_POSTS = 'GET_POSTS';

export function getPosts() {
    return async function (dispatch) {
        
        const posts = await axios.get('http://77.120.108.119:9999/tweets/');
        const users = await axios.get('http://77.120.108.119:9999/users/');
        const postsWithUsers = posts.data.data.map(post => ({
            ...post,
            author: users.data.data.find(user=> post.userId === user.id),
        }))
        dispatch({
            type: GET_POSTS,
            payload: postsWithUsers
        }); 
    };
}
export function createPost(data) {
    return async function (dispatch) {
        await axios.post('http://77.120.108.119:9999/tweets/', data);
        dispatch({
            type: CREATE_POST
        }); 
    };
}