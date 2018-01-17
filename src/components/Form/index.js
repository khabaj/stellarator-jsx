import React from 'react';
import Input from '../Input';
import PropTypes from 'prop-types';

const form = ({ config }) => {

    let inputs = config.map((cfg, index) => {
        return (
            <Input
                key={index}
                placeholder={cfg.placeholder}
                label={cfg.label}
                size={cfg.size}
                name={cfg.name}
                type={cfg.type}
                error={cfg.error}
            />
        )
    });

    return (
        <form>
            {inputs}
        </form>)
}

form.propTypes = {
    config: PropTypes.array.isRequired
};

export default form;