import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { NavLink } from "react-router-dom";

import NavIcon from "./NavIcon";
import Logo from "./Logo";

import { hideNav } from "../../redux/actions";

class Nav extends Component {
  render() {
    const { isNavVisible, hideNav } = this.props;
    const navStyles = isNavVisible ? "nav-nav nav-nav__isVisible" : "nav-nav";
    const closeStyles = isNavVisible
      ? "nav-nav__close nav-nav__close-visible"
      : "nav-nav__close";
    return (
      <nav className="nav">
        <div className={navStyles}>
          <span onClick={hideNav} className={closeStyles}>
            &times;
          </span>
          <ul className="nav-nav__list">
            <li onClick={hideNav} className="nav-nav__item">
              <NavLink className="nav-nav__link" to="/">
                Home
              </NavLink>
            </li>
            <li onClick={hideNav} className="nav-nav__item">
              <NavLink className="nav-nav__link" to="/leaderboard">
                Leaderboard
              </NavLink>
            </li>
            <li onClick={hideNav} className="nav-nav__item">
              <NavLink className="nav-nav__link" to="/hackathons">
                Hackathons
              </NavLink>
            </li>
            <li onClick={hideNav} className="nav-nav__item">
              <NavLink className="nav-nav__link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li onClick={hideNav} className="nav-nav__item">
              <NavLink className="nav-nav__link" to="/shop">
                Shop
              </NavLink>
            </li>
          </ul>
          <Logo />
        </div>
        <div className="nav-container">
          <NavIcon location={this.props.location.pathname} />
          <Logo />
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    isNavVisible: state.nav.isNavVisible
  };
}

export default compose(withRouter, connect(mapStateToProps, { hideNav }))(Nav);
