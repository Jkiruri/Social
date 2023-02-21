
import ReactDOM from 'react-dom'
import "./navBar.scss"
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// // import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
// import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
      <Link to = "./">
      <span>Wenz Social</span>
      </Link>
      </div>
      <div className="right">

      </div>
    </div>
  )
}

export default NavBar