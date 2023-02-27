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
        img: "https://images.pexels.com/photos/668137/pexels-photo-668137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        name: "John Doe",
        userId: 1,
        profilePic: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla quis mauris tristique facilisis. Fusce bibendum, mauris in lobortis euismod, elit dolor sagittis elit, id molestie velit velit eget dui.",
        img: "https://images.pexels.com/photos/569163/pexels-photo-569163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        name: "John Doe",
        userId: 2,
        profilePic: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla quis mauris tristique facilisis. Fusce bibendum, mauris in lobortis euismod, elit dolor sagittis elit, id molestie velit velit eget dui.",
        img: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 4,
        name: "John Doe",
        userId: 3,
        profilePic: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla quis mauris tristique facilisis. Fusce bibendum, mauris in lobortis euismod, elit dolor sagittis elit, id molestie velit velit eget dui.",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    },
];

  return <div className='posts'>
    {posts.map(post=>(
      <Post post={post} key = {post.id}/>
    ))}
    </div>;
  
};

export default Posts