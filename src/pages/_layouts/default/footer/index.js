import React from 'react'
// import PropTypes from 'prop-types'
import './footer.css';

function DefaultFooter(props) {
    return (
        <div className="footer__wrapper">
            <div className="footer__left">
                <div className="footer__logo">
                    <h1>eSHOP</h1>
                </div>
            </div>
            <div className="footer__right"></div>
        </div>
    )
}

DefaultFooter.propTypes = {

}

export default DefaultFooter

