import { Button, Input, Layout } from 'components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appRoutes, strings } from 'utils';

export const HomePage = () => {
    const navigate = useNavigate();

    const [owner, setOwner] = useState('');
    const [repository, setRepository] = useState('');
    const [ownerError, setOwnerError] = useState('');
    const [repoError, setRepoError] = useState('');
    const [isOwnerDirty, setOwnerDirty] = useState(false);
    const [isRepoDirty, setRepoDirty] = useState(false);

    const handleFromSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        /* Validations */
        if (!owner) setOwnerDirty(true);
        if (!repository) setRepoDirty(true);
        if (!owner || !repository) return;

        /* Navigate to the issues page */
        navigate(`${appRoutes.ISSUES_PAGE}/${owner}/${repository}`);
    };

    useEffect(() => {
        if (!isOwnerDirty) return;
        if (owner) setOwnerError('');
        if (!owner) setOwnerError(strings.required_field);
    }, [isOwnerDirty, owner]);

    useEffect(() => {
        if (!isRepoDirty) return;
        if (repository) setRepoError('');
        if (!repository) setRepoError(strings.required_field);
    }, [isRepoDirty, repository]);

    return (
        <Layout bgWithSvg centerContent>
            <form onSubmit={handleFromSubmit}>
                <div className="flex justify-center items-center space-x-5">
                    <Input
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                        error={ownerError}
                        label={strings.owner}
                        required
                        name="owner"
                        placeholder={strings.owner_name}
                    />
                    <Input
                        value={repository}
                        onChange={(e) => setRepository(e.target.value)}
                        error={repoError}
                        label={strings.repo}
                        required
                        name="Repository"
                        placeholder={strings.repo_name}
                    />
                </div>
                <div className="flex justify-center">
                    <Button type="submit" text={strings.show_issues} />
                </div>
            </form>
        </Layout>
    );
};
