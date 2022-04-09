import { ButtonHTMLAttributes } from 'react';

interface IActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const ActionButton = ({ text, ...rest }: IActionButtonProps) => {
    return (
        <button className="text-blue hover:text-blue/90 disabled:text-secondary/40" {...rest}>
            {text}
        </button>
    );
};
