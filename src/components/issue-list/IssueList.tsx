import { IssueItem } from 'components';
import { EmptyList } from 'components/empty-list/EmptyList';
import { TotalIssue } from 'components/total-issue/TotalIssue';
import { IIssue } from 'types/IIssue';

interface IIssueListProps {
    issues: IIssue[];
    totalCount: number;
}

export const IssueList = ({ issues, totalCount }: IIssueListProps) => {
    return (
        <div className="border border-white/20 rounded flex-1 min-w-[90%] md:min-w-[800px]">
            <TotalIssue totalCount={totalCount} />
            {issues.length === 0 && <EmptyList />}
            {issues.map((issue) => (
                <IssueItem key={issue.id} issue={issue} />
            ))}
        </div>
    );
};
