import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_POST, createPost } from '../store/actions/posts.actions';
import { getUsers } from '../store/actions/users.actions';

function PostInputs(props) {
    const [content, setContent] = useState('');
    const [image, setImage]= useState('');
    
    const authors= useSelector(state => state.users.users);

    const [author, setAuthor] = useState(authors[0]);
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, []);

    const handleContentChange = (event)=>{
        setContent(event.target.value)
    }
    const handleImageChange = (event)=>{
        setImage(event.target.value)
    }

    const handleAuthorChange = (event) => {
        setAuthor(Number(event.target.value));
    }

    const addPost = () => {
        dispatch(createPost({
            userId: author,
            content,
            image
        }));
        setContent('')
        setImage('')
    }
    return(
        <div className='layout-wrapper'>
            <div>
                <input placeholder='Content' value={content} onChange={handleContentChange}/>
            </div>
            <div>
                <input value={image} placeholder='Image' onChange={handleImageChange}/>
            </div>
            <div>
                <select onChange={handleAuthorChange}           >
                    {authors.map(author => 
                        <option 
                            value={author.id}
                        >{author.name}</option>) }
                </select>
            </div>
            <button onClick={addPost}>Add post</button>
        </div>
    )
};

export default PostInputs;