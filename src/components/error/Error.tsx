import { Layout } from 'components/layout/Layout';
import { strings } from 'utils';

interface IErrorProps {
    text?: string;
}

export const Error = ({ text }: IErrorProps) => {
    return (
        <Layout centerContent bgWithSvg>
            <h1 className="bg-red-100 rounded p-5 text-error">
                {text || strings.something_went_wrong}
            </h1>
        </Layout>
    );
};
