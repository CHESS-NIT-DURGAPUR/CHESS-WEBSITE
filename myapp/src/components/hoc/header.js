import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { log } from "../actions/memberactions"
import chess from '../../images/chess.webp'
import "./header.css";
class Header extends Component {

  logoutuser = () => {
    this.props.dispatch(log()).then((res) => {
      console.log('logout')
    }).catch(err =>
      console.log(err)
    )
  }

  render() {
    console.log(this.props.user.userData)
    return (
      <React.Fragment>
        {/* <div className="extraSpace"></div> */}
        <div className='header'>
          <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top" style={{ height: "auto" }}>
            <div className="container-fluid">
              <Link to="/" className="navbar-brand user__group">
                <img src={chess} alt="chess" />
              </Link>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse flex-grow-0 main__navs" id="collapsibleNavbar"
              >
                <ul className="navbar-nav abs-center-x">
                  <li className="nav-item ">
                    <Link className="nav-link  nav__link" to="/">
                      <i className="fa fa-home" aria-hidden="true"></i> HOME
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link nav__link" to="/facad">
                      <i className="fa fa-user-plus" aria-hidden="true"></i> FACULTY
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link nav__link" to="/alumni">
                      <i className="fa fa-graduation-cap" aria-hidden="true"></i> ALUMNI
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link nav__link" to="/member">
                      <i className="fa fa-users" aria-hidden="true"></i> MEMBER
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link nav__link dropdown-toggle" data-toggle="dropdown" to="/">
                      {/* <i class="fa fa-calendar" aria-hidden="true"></i> */}
                      EVENTS
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className='dropDown__link' to="/chemkriti2021">ChemKriti 2021</Link></li>
                      <li><Link className='dropDown__link' to="/chemkriti2022">ChemKriti 2022</Link></li>
                      <li><Link className='dropDown__link' to="/moreevents">More Events</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="navbar-collapse collapse flex-grow-0" id="collapsibleNavbar">
                <ul className="navbar-nav  justify-content-center mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link nav__link" to="/register">
                      REGISTER <i className="fa fa-user" aria-hidden="true"></i>

                    </Link>
                  </li>
                  {this.props.user.userData ?
                    !this.props.user.userData.isAuth ?
                      <li className="nav-item ">
                        <Link className="nav-link nav__link" to="/login">
                          LOGIN <i className="fa fa-sign-in" aria-hidden="true"></i>

                        </Link>
                      </li>
                      :
                      <li className="nav-item active">
                        <Link className="nav-link nav__link" to="/logout" onClick={() => this.logoutuser()}>
                          LOGOUT <i className="fa-solid fa-right-from-bracket"></i>
                        </Link>
                      </li> : null
                  }
                  {this.props.user.userData ?

                    this.props.user.userData.isAuth ?
                      <li className="nav-item active">
                        <Link className="nav-link nav__link" to="/blogs">BLOGS</Link>
                      </li>
                      :
                      null
                    : null
                  }
                  {
                    this.props.user.userData ?
                      this.props.user.userData.isAuth ?
                        this.props.user.userData.role === 1 ?
                          <li className="nav-item">
                            <Link className="nav-link nav__link" to="/details" >ADD ALUMNI DETAILS</Link>
                          </li>
                          :
                          <li className="nav-item">
                            <Link className="nav-link nav__link" to="/allalum" >VIEW ALL ALUMNI</Link>
                          </li>
                        : null
                      : null
                  }


                  {
                    this.props.user.userData ?
                      this.props.user.userData.isAuth ?
                        this.props.user.userData.role === 1 ?

                          <li className="nav-item active">
                            <Link className="nav-link nav__link" to="/allalum" >VIEW ALL ALUMNI</Link>
                          </li>
                          : null
                        : null
                      : null
                  }


                  {
                    this.props.user.userData ?
                      this.props.user.userData.isAuth ?
                        this.props.user.userData.role === 1 ?

                          <li className="nav-item active">
                            <Link className="nav-link nav__link" to="/addnews" >ADD NEWS</Link>
                          </li>
                          : null
                        : null
                      : null
                  }

                  {
                    this.props.user.userData ?
                      this.props.user.userData.isAuth ?
                        this.props.user.userData.role === 1 ?

                          <li className="nav-item active">
                            <Link className="nav-link nav__link" to="/notific" >SENT NOTIFICATIONS</Link>
                          </li>
                          : null
                        : null
                      : null
                  }

                  {
                    !this.props.user.userData ?
                      <li className="nav-item active">
                        <Link className="nav-link nav__link" to="/login" >LOGIN</Link>
                      </li> : null
                  }
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.member,
  }

}

export default connect(mapStateToProps)(Header);