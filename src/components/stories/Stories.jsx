import React from 'react'
import "./stories.scss"
import image from '../../assets/12.jpg';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';


const Stories = () => {
    const {currentUser} = useContext(AuthContext)

const stories = [
    {
        id: 1,
        name: "John Doe",
        img: {image}
    },
    {
        id: 2,
        name: "John Doe",
        img: {image}
    },
    {
        id: 3,
        name: "John Doe",
        img: {image}
    },
    {
        id: 4,
        name: "John Doe",
        img: {image}
    },
];


  return (
    
    <div className="stories">
        <div className="story">
            <img src={currentUser.profilePic} alt=""/>
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story">
            <img src={image} alt=""/>
            <span>{story.name}</span>
        </div>
      ))}  
    </div>
  )
}

export default Stories