import "./rightBar.scss"
import Dog from "../../assets/14.jpg";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={Dog} alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Dog} alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
      <div className="item">
        <span>Latest Activities</span>
        <div className="user">
            <div className="userInfo">
              <img src={Dog} alt="" />
              <p>
              <span>John Doe</span>
              Changed their cover picture 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Dog} alt="" />
              <p>
              <span>John Doe</span>
              Changed their cover picture 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Dog} alt="" />
              <p>
              <span>John Doe</span>
              Changed their cover picture 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Dog} alt="" />
              <p>
              <span>John Doe</span>
              Changed their cover picture 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Dog} alt="" />
              <p>
              <span>John Doe</span>
                Changed their cover picture 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Dog} alt="" />
              <p>
              <span>John Doe</span>
              Changed their cover picture 
              </p>
            </div>
            <span>1 min ago</span>
          </div>
      </div>
      <div className="item">
        <span>Online Friends</span>
        <div className="user">
            <div className="userInfo">
              <img src={Dog} alt="" />
              <div className="online"/>
              <span>John Doe</span>
              
              
            </div>
           
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Dog} alt="" />
              <div className="online"/>
              <span>John Doe</span>
              
              
            </div>
           
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Dog} alt="" />
              <div className="online"/>
              <span>John Doe</span>
              
              
            </div>
           
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Dog} alt="" />
              <div className="online"/>
              <span>John Doe</span>
              
              
            </div>
           
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Dog} alt="" />
              <div className="online"/>
              <span>John Doe</span>
              
              
            </div>
           
          </div>
      </div>
      </div>
    </div>
  )
}

export default RightBar