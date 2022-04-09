import { IssueItem } from 'components';
import { Layout } from 'components/layout/Layout';
import { TotalIssue } from 'components/total-issue/TotalIssue';
import { IIssue } from 'types/IIssue';

interface IIssueListProps {
    issues: IIssue[];
    totalCount: number;
}

export const IssueList = ({ issues, totalCount }: IIssueListProps) => {
    return (
        <Layout centerContent>
            <div className="border border-white/20 rounded">
                <TotalIssue totalCount={totalCount} />
                {issues.map((issue) => (
                    <IssueItem key={issue.id} issue={issue} />
                ))}
            </div>
        </Layout>
    );
};
