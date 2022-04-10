import { render } from '@testing-library/react';
import { IIssue } from 'types/IIssue';
import { IssueList } from './IssueList';

const dummyIssues: IIssue[] = [
    {
        id: '1103473356',
        number: '41514',
        html_url: 'https://github.com/nodejs/node/issues/41514',
        title: 'Error in building the Linux x86 library (2)',
        created_at: '2022-04-08T08:54:27Z',
        comments: 12,
        state: 'closed',
        user: {
            login: 'dev2alert',
            url: 'https://github.com/dev2alert',
        },
    },
    {
        id: '1197034218',
        number: '42654',
        html_url: 'https://github.com/nodejs/node/issues/42654',
        title: 'Please provide GitHub Desktop Client as alternative to git',
        state: 'closed',
        created_at: '2022-04-08T08:54:27Z',
        comments: 10,
        user: {
            login: 'blueicehaller',
            url: 'https://github.com/dev2alert',
        },
    },
];

describe('<IssueList/>', () => {
    it('Should render a list of issues', async () => {
        const { getByText } = render(<IssueList totalCount={30} issues={dummyIssues} />);

        /* issue title */
        const title = getByText(/Please provide GitHub Desktop Client as alternative to git/);
        expect(title).toBeVisible();

        /* issue id */
        const issueId = getByText(/42654/);
        expect(issueId).toBeVisible();
    });

    it('Should should render a time ago text', async () => {
        const { getByText } = render(<IssueList totalCount={30} issues={dummyIssues} />);
        const timeAgoText = getByText(/Opened 2 days ago by blueicehaller/);
        expect(timeAgoText).toBeVisible();
    });
});

/* For removing react 18 warning */
const originalError = console.error;
beforeAll(() => {
    console.error = (...args) => {
        if (/Warning: ReactDOM.render is no longer supported in React 18./.test(args[0])) {
            return;
        }
        originalError.call(console, ...args);
    };
});

afterAll(() => {
    console.error = originalError;
});
