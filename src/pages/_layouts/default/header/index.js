import React from 'react'
// import PropTypes from 'prop-types'
import { withRouter, NavLink, Link } from 'react-router-dom'
import './header.css';

function DefaultHeader(props) {
    return (
        <div className="header__wrapper">
            <div className="header__wrapper__left">
                {/* <Link to="/"> */}
                {/* </Link> */}
            </div>
            <div className="header__wrapper__middle">
                <NavLink to="/" exact className="header__links" activeClassName="active">Home</NavLink>
                <NavLink to="/products" exact className="header__links " activeClassName="active">Products</NavLink>
                <NavLink to="/contact-us" exact className="header__links" activeClassName="active">Contact us</NavLink>
            </div>
            <div className="header__wrapper__right">
                <button className="button__login" onClick={() => props.history.push('/login')}>Login</button>
                <button className="button__signup" onClick={() => props.history.push('/register')}>Sign Up</button>
            </div>
        </div>
    )
}

DefaultHeader.propTypes = {

}

export default withRouter(DefaultHeader)

