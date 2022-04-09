import { SpinnerIcon } from 'assets/icons';
import cn from 'classnames';

interface ISpinnerProps {
    fullPage?: boolean;
}

export const Spinner = ({ fullPage = false }: ISpinnerProps) => {
    return (
        <div className={cn({ 'flex-1': fullPage })}>
            <SpinnerIcon />
        </div>
    );
};
