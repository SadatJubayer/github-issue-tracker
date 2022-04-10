import { AxiosError } from 'axios';
import { IIssue } from 'types/IIssue';
import { apiRoutes, ISSUES_PER_PAGE } from 'utils/constants';
import { axios } from './apiClient';

//@Types
interface IGitHubInputs {
    owner: string;
    repository: string;
    page: number;
}

type ResponseType = 'success' | 'failure';

interface IResponse {
    type: ResponseType;
    total?: number;
    issues?: IIssue[];
    error?: string;
}

export const getIssuesByOwnerAndRepo = async ({
    owner,
    repository,
    page,
}: IGitHubInputs): Promise<IResponse> => {
    try {
        const response = await axios.get(
            `${apiRoutes.issues}?q=repo:${owner}/${repository}+type:issue`,
            {
                params: {
                    per_page: `${ISSUES_PER_PAGE}`,
                    page: `${page}`,
                },
            }
        );
        console.log(response);
        return {
            type: 'success',
            total: response.data.total_count,
            issues: response.data.items,
        };
    } catch (error) {
        const err = error as AxiosError;
        return {
            type: 'failure',
            error: err.response?.data?.message,
        };
    }
};
