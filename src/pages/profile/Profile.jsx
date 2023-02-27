
import "./profile.scss"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../components/posts/Posts"

function Profile() {
  return (
    <div className="profile">
    <div className="images">
      <img src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" className="cover"/>
      <img src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" className="profilePic"/>
      </div>  
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="#">
              <FacebookTwoToneIcon fontSize="large"/>
            </a>
            <a href="#">
              <InstagramIcon fontSize="large"/>
            </a>
            <a href="#">
              <TwitterIcon fontSize="large"/>
            </a>
            <a href="#">
              <LinkedInIcon fontSize="large"/>
            </a>
            <a href="#">
              <PinterestIcon fontSize="large"/>
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>Kenya</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>James.dev</span>
              </div>
              
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
      </div>
      <Posts/>
    </div>
  )
}

export default Profile