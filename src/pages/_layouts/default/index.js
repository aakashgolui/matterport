import React from 'react'
import PropTypes from 'prop-types'
function DefaultLayout(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired
}

export default DefaultLayout;

