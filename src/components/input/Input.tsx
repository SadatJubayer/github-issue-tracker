import cn from 'classnames';
import { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const Input = ({ name, error, required, label, ...rest }: IInputProps) => {
    return (
        <div className="relative flex flex-col space-y-2 mb-12">
            <label className="text-sm text-secondary/80" htmlFor={name}>
                {label} {required && <span className="text-error">*</span>}
            </label>
            <input
                className={cn(
                    'text-lg px-5 py-2.5 rounded placeholder:text-opacity-12 bg-white bg-opacity-12 focus:outline focus:ring outline-blue ring-blue/17',
                    { 'outline-error ring-error/20 outline ring': !!error }
                )}
                id={name}
                {...rest}
            />
            {error && (
                <div className="absolute -bottom-10 flex-col items-start flex">
                    <div className="w-3 h-3 -mb-2 rotate-45  ml-5 bg-tooltip border border-error/14"></div>
                    <span className="relative z-10 p-2 text-xs leading-none text-error whitespace-no-wrap bg-tooltip border border-error/14 rounded">
                        {error}
                    </span>
                </div>
            )}
        </div>
    );
};
