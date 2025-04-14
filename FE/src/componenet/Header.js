import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../redux/auth/authSlice'

export default function Header() {
  const isLogged = useSelector((state) => state.auth.isLogged)
  // const userData = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logout())
    localStorage.removeItem('token')
  }
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
              <li><NavLink to='/' onClick={handleLogOut}><span class="glyphicon glyphicon-log-out"></span></NavLink></li>
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
