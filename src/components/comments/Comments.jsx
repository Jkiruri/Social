import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {

    const {currentUser} = useContext(AuthContext)
    const comments = [
        {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla quis mauris tristique facilisis. Fusce bibendum, mauris in lobortis euismod, elit dolor sagittis elit, id molestie velit velit eget dui.",
            img: "https://images.pexels.com/photos/668137/pexels-photo-668137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            name: "John Doe",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla quis mauris tristique facilisis. Fusce bibendum, mauris in lobortis euismod, elit dolor sagittis elit, id molestie velit velit eget dui.",
            
        },
        {
            id: 3,
            name: "John Doe",
            userId: 2,
            profilePicture: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla quis mauris tristique facilisis. Fusce bibendum, mauris in lobortis euismod, elit dolor sagittis elit, id molestie velit velit eget dui.",
            
        },
        {
            id: 4,
            name: "John Doe",
            userId: 3,
            profilePicture: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla quis mauris tristique facilisis. Fusce bibendum, mauris in lobortis euismod, elit dolor sagittis elit, id molestie velit velit eget dui.",
            
        },
    ];
  return (
    <div className="comments">
        <div className="write">
        <img src={currentUser.profilePic} alt="" />  
        <input type="text" placeholder = "write a comment" />  
        <button>Send</button>
        </div>
        {
        comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))
    }</div>
  )
}

export default Comments