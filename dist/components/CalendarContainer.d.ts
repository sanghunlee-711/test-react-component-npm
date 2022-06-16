import React from 'react';
interface InputProps {
    className: string;
    value: string;
    onChange: (value: string) => void;
    onClick: () => void;
}
declare const _default: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default _default;
