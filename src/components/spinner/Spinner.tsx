import { SpinnerIcon } from 'assets/icons';
import { Layout } from 'components/layout/Layout';

interface ISpinnerProps {
    fullPage?: boolean;
}

export const Spinner = ({ fullPage = false }: ISpinnerProps) => {
    return (
        <Layout centerContent={fullPage}>
            <SpinnerIcon />
        </Layout>
    );
};
