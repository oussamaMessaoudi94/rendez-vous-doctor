import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { login, logout } from '../redux/auth/authSlice'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
export default function Header() {
  const isLogged = useSelector((state) => state.auth.isLogged)
  const userData = useSelector((state) => state.auth.user)

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logout())
    localStorage.removeItem('token')
  }
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <div>
      <header className="clearfix" >
        <div className="container">
          <div className="logo" >
            <div className="doctor-name">Dr. Oussama</div>
            <div className="tagline">Better call oussama</div>
          </div>
          <div className="box1 clearfix">
            <div className="box2 clearfix">
              <img src="img/call_girl.png" alt />
              <p>Need a helping hand? Call our office search<br />helpline for advice - <span>+216 99709990</span></p>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-default navbar-static-top tm_navbar clearfix" role="navigation">
          <div className="container">
            {isLogged ? (<ul className="nav sf-menu clearfix">
              <li className="active"><NavLink to='/'>Home</NavLink></li>
              <li className="dropdown"><NavLink to="/listeAppoint">Rendez-vous</NavLink></li>
              <li className="dropdown"><NavLink to="/archives">Archives</NavLink></li>
              <li><NavLink to="/service">services</NavLink></li>
              <li><NavLink to="/contact">Contacts</NavLink></li>
            </ul>

            ) : (<ul className="nav sf-menu clearfix">
              <li className="active"><NavLink to='/'>Home</NavLink></li>
              <li className="dropdown"><NavLink to="/appointments">Rendez-vous</NavLink>
              </li>
              <li><NavLink to="/service">services</NavLink></li>
              <li><NavLink to="/contact">Contacts</NavLink></li>
           
            </ul>)}
            {isLogged ? (<ul className="follow_icon" style={{ marginLeft: '100px' }}>
              <li><a href="#" className="fa fa-facebook" /></li>
              <li><a href="#" className="fa fa-linkedin" /></li>
              <li className={classes.root} style={{height:'25px', marginLeft:'50px'}}>      <Button 
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <Avatar src="/broken-image.jpg" className={classes.small} />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Hello: {userData.name}</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu></li>
              {/* <li><NavLink to='/' onClick={handleLogOut}><span class="glyphicon glyphicon-log-out"></span></NavLink></li> */}
            </ul>) : (
              <ul className="follow_icon" style={{ marginLeft: '100px' }}>
                <li><a href="#" className="fa fa-facebook" /></li>
                <li><a href="#" className="fa fa-linkedin" /></li>
              </ul>
            )}

          </div>
        </nav>
      </header>

    </div>
  )
}
