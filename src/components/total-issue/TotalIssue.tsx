import { IssueClosedIcon, IssueOpenIcon } from 'assets/icons';

export const TotalIssue = ({ totalCount }: { totalCount: number }) => {
    return (
        <div className="bg-hover p-4 flex items-center">
            <div className="flex items-center space-x-2">
                <IssueOpenIcon />
                <span>{totalCount} Open</span>
            </div>
            <div className="opacity-50 flex items-center ml-5 space-x-2">
                <IssueClosedIcon />
                <span>Closed </span>
            </div>
        </div>
    );
};
