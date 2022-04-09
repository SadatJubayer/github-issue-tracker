import { Error, IssueList, Spinner } from 'components';
import { useRootDispatch } from 'hooks/useRootDispatch';
import { useRootState } from 'hooks/useRootState';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchIssues } from 'store/issuesSlice';
import { appRoutes } from 'utils';

type IParms = {
    owner: string;
    repository: string;
};

export const IssuesPage = () => {
    const navigate = useNavigate();
    const { owner, repository } = useParams<IParms>();

    const dispatch = useRootDispatch();
    const { issues, totalIssues, loading, error } = useRootState((state) => state.issues);
    console.log({ issues, totalIssues, loading, error });

    useEffect(() => {
        if (!owner || !repository) {
            return navigate(appRoutes.NOT_FOUND);
        }
        dispatch(fetchIssues({ page: 1, owner, repository }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <Spinner fullPage />;
    }

    if (error) {
        return <Error text={error} />;
    }
    return (
        <>
            <IssueList totalCount={totalIssues} issues={issues} />
        </>
    );
};
