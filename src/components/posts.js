import React, { useEffect, useRef } from 'react';
import Post from './post';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../store/actions/posts.actions';
import socket from '../utils/socket'
import mp3 from '../audio/D.mp3';

function Posts() {
    const audio = new Audio(mp3);
    socket.on("new-tweet", (tweet) => {
        dispatch(getPosts())
        audio.play();
    });


    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    }, []);
    return (
        <div className="layout-wrapper">
            {/* <audio controls  ref={audio}>
            <source src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"></source>
        </audio> */}
            {posts.map(post =>
                <Post
                    author={post.author}
                    content={post.content}
                    image={post.image}
                    date={post.date}
                />

            )}
        </div>
    )

};

export default Posts;