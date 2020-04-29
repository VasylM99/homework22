import React, { useEffect }  from 'react';
import User from './user';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../store/actions/users.actions';

function Users() {
    const users = useSelector(state =>state.users.users);
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, []);
    return users.map(user => 
        <User 
            avatar={user.avatar}
            name={user.name}
            username={user.username}
        />
        
    )     
};

export default Users;