import { strings } from 'utils';

export const EmptyList = () => {
    return (
        <div className="text-center text-success p-5 flex justify-center items-center mt-24">
            <h2 className="bg-success/20 p-5 rounded"> {strings.no_issues}</h2>
        </div>
    );
};
