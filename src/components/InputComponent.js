import React from 'react';

const Input = ({
    name,
    type,
    placeholder,
    onChange,
    className,
    id,
    ...props
}) => {

    return (
        <React.Fragment>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className={className}
            />
        </React.Fragment>
    )
}

Input.defaultProps = {
    type: "text",
    className: ""
}

export default Input;