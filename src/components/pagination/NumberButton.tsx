import cn from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
interface INumberButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    isActive: boolean;
}

export const NumberButton = ({ text, isActive, ...rest }: INumberButtonProps) => {
    return (
        <button
            className={cn('text-secondary/40 hover:text-blue', {
                'bg-blue px-2 py-0.5 text-white hover:text-white rounded-sm': isActive,
            })}
            {...rest}
        >
            {text}
        </button>
    );
};
