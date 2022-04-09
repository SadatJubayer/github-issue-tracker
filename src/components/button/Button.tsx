import { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const Button = ({ text, ...rest }: IButtonProps) => {
    return (
        <button
            className="bg-primary rounded px-4 py-2 text-sm transform transition-transform hover:-translate-y-0.5 active:bg-primary/90"
            {...rest}
        >
            {text}
        </button>
    );
};
