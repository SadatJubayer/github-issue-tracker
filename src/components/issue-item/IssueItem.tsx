/* eslint-disable @typescript-eslint/naming-convention */
import { CommentIcon, IssueOpenIcon } from 'assets/icons';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { IIssue } from 'types/IIssue';
import { strings } from 'utils';

// Create formatter (English).
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

interface IIssueItemProps {
    issue: IIssue;
}

export const IssueItem = ({ issue }: IIssueItemProps) => {
    const {
        created_at,
        html_url,
        title,
        number,
        user: { login },
        comments,
    } = issue;

    const time = timeAgo.format(new Date(created_at));

    return (
        <a
            href={html_url}
            target="_blank"
            className="border-t border-white/20 hover:bg-hover p-4 flex justify-between items-center group"
        >
            <div className="flex space-x-2.5">
                <span>
                    <IssueOpenIcon type="success" />
                </span>
                <div className="flex flex-col">
                    <p className="text-sm group-hover:text-blue">{title}</p>
                    <div className="pt-1 flex space-x-1 items-center text-xs text-secondary/50">
                        <p>#{number}</p>
                        <p>
                            {strings.opened} {time} {strings.by} {login}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-2 pl-5">
                <CommentIcon /> <span className="text-secondary/50 text-sm">{comments}</span>
            </div>
        </a>
    );
};
