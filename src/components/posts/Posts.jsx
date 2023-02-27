import React from 'react'
import "./posts.scss"
import Post from '../../components/post/Post'
import profile from '../../assets/16.jpg';


const Posts = () => {

  const posts = [
    {
        id: 1,
        name: "John Doe",
        userId: 1,
        profilePic: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla quis mauris tristique facilisis. Fusce bibendum, mauris in lobortis euismod, elit dolor sagittis elit, id molestie velit velit eget dui.",
        img: "https://images.pexels.com/photos/3299905/pexels-photo-3299905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        name: "John Doe",
        userId: 1,
        profilePic: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla quis mauris tristique facilisis. Fusce bibendum, mauris in lobortis euismod, elit dolor sagittis elit, id molestie velit velit eget dui.",
        img: {profile}
    },
    {
        id: 3,
        name: "John Doe",
        userId: 2,
        profilePic: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla quis mauris tristique facilisis. Fusce bibendum, mauris in lobortis euismod, elit dolor sagittis elit, id molestie velit velit eget dui.",
        img: {profile}
    },
    {
        id: 4,
        name: "John Doe",
        userId: 3,
        profilePic: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla quis mauris tristique facilisis. Fusce bibendum, mauris in lobortis euismod, elit dolor sagittis elit, id molestie velit velit eget dui.",
        img: {profile}
    },
];

  return <div className='posts'>
    {posts.map(post=>(
      <Post post={post} key = {post.id}/>
    ))}
    </div>;
  
};

export default Posts