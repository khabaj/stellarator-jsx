import React from 'react';
import Input from '../Input'

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

export default form;