import axios from 'axios';

export const CREATE_USER= 'CREATE_USER';
export const GET_USERS= 'GET_USERS';

export function getUsers() {
    return async function (dispatch) {
        const users= await axios.get('http://77.120.108.119:9999/users/');
        dispatch({
            type: GET_USERS,
            payload: users.data.data
        }); 
    };
}
export function createUser(data) {
    return async function (dispatch) {
        await axios.post('http://77.120.108.119:9999/users/', data);
        dispatch({
            type: CREATE_USER
        }); 
    };
}