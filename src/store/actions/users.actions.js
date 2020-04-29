import axios from 'axios';

export const CREATE_USER= 'CREATE_USER';
export const GET_USERS= 'GET_USERS';

export function getUsers() {
    return async function (dispatch) {
        const users= await axios.get('https://tweets.globalofficiallottery.com/users/');
        dispatch({
            type: GET_USERS,
            payload: users.data.data
        }); 
    };
}
export function createUser(data) {
    return async function (dispatch) {
        await axios.post('https://tweets.globalofficiallottery.com/users/', data);
        dispatch({
            type: CREATE_USER
        }); 
    };
}