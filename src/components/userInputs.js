import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_USER, createUser } from '../store/actions/users.actions';


function UserInputs(props) {
    const [name, setName] = useState('');
    const [avatar, setAvatar]= useState('');
    const [username, setUsername] = useState('');
    const dispatch= useDispatch();
    
    const handleNameChange = (event)=>{
        setName(event.target.value)
    }
    const handleAvatarChange = (event)=>{
        setAvatar(event.target.value)
    }
    const handleUsernameChange = (event)=>{
        setUsername(event.target.value)
    }


    const addUser = () => {
        dispatch(createUser({
            name,
            avatar,
            username
        }));
        setName('')
        setAvatar('')
        setUsername('')
    }
    return(
        <div>
            <div>
                <input placeholder='Name' value={name} onChange={handleNameChange}/>
            </div>
            <div>
                <input value={avatar} placeholder='Avatar' onChange={handleAvatarChange}/>
            </div>
            <div>
                <input value={username} placeholder='Username' onChange={handleUsernameChange} />
            </div>
            <button onClick={addUser}>Add user</button>
        </div>
    )
};

export default UserInputs;