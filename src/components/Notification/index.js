import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css"

const notification = ({ type, children }) => {
    return (
        <div className={`notification notification-${type}`}>
            {children}
        </div>
    )
}

notification.propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'danger']),
    children: PropTypes.string
};

notification.defaultProps = {
    type: 'info'
};

export default notification;