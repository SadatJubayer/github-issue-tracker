export interface IIssue {
    id: string;
    html_url: string;
    title: string;
    created_at: string;
    number: string;
    state: 'closed' | 'open';
    comments: number;
    user: {
        url: string;
        login: string;
    };
}
