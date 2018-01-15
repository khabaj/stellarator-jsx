import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.css';

const text = ({ heading, size, children }) => {
    return (
        heading ?
            <h1 className={size}> {children} </h1>
            :
            <p className={size}> {children} </p>
    );
}

text.propTypes = {
    heading: PropTypes.bool,
    children: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
};

text.defaultProps = {
    heading: false,
    size: 'medium'
};

export default text;