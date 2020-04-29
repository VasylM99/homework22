import axios from 'axios';

export const CREATE_POST = 'CREATE_POST';
export const GET_POSTS = 'GET_POSTS';

export function getPosts() {
    return async function (dispatch) {
        
        const posts = await axios.get('https://tweets.globalofficiallottery.com/tweets/');
        const users = await axios.get('https://tweets.globalofficiallottery.com/users/');
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
        await axios.post('https://tweets.globalofficiallottery.com/tweets/', data);
        dispatch({
            type: CREATE_POST
        }); 
    };
}