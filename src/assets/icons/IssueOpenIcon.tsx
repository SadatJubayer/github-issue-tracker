import cn from 'classnames';

export const IssueOpenIcon = ({ type }: { type?: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 18 18">
            <circle
                cx="9"
                cy="9"
                r="8.5"
                className={cn('bg-transparent stroke-current text-secondary', {
                    'text-success group-hover:text-primary': type === 'success',
                })}
            ></circle>
            <circle
                cx="9"
                cy="9"
                r="2"
                className={cn('fill-current text-secondary', {
                    'text-success group-hover:text-primary': type === 'success',
                })}
            ></circle>
        </svg>
    );
};
