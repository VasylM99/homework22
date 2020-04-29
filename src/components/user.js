import React  from 'react';
import './style.css';



function User(props) {   

    return(
        <div className="wrapper">
            <div>
                <img className="avatar" src={props.avatar} alt='avatar'/>
            </div>
            <div className="main">
                <div className="info">
                    <div className="info-acc">
                        <span className="name">{props.name}</span>
                        <span className="nickname">{props.username}</span>
                    </div>
                </div>
            </div>
        </div>            
    )
}


export default User;