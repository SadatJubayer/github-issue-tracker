import { Error, IssueList, Layout, Spinner } from 'components';
import { Pagination } from 'components/pagination/Pagination';
import { useRootDispatch } from 'hooks/useRootDispatch';
import { useRootState } from 'hooks/useRootState';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchIssues } from 'store/issuesSlice';
import { appRoutes } from 'utils';

type IParms = {
    owner: string;
    repository: string;
};

export const IssuesPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const { owner, repository } = useParams<IParms>();

    const dispatch = useRootDispatch();
    const { issues, totalIssues, loading, error } = useRootState((state) => state.issues);
    console.log({ issues, totalIssues, loading, error });

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        if (!owner || !repository) {
            return navigate(appRoutes.NOT_FOUND);
        }
        dispatch(fetchIssues({ page: currentPage, owner, repository }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    if (error) {
        return <Error text={error} />;
    }
    return (
        <Layout centerContent>
            {loading && <Spinner fullPage />}
            {!loading && <IssueList totalCount={totalIssues} issues={issues} />}
            {issues.length > 0 && (
                <Pagination
                    total={totalIssues}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                />
            )}{' '}
        </Layout>
    );
};
