import { Layout } from 'components';
import { Link } from 'react-router-dom';
import { appRoutes, strings } from 'utils';

export const FourOhFourPage = () => {
    return (
        <Layout bgWithSvg>
            <div className="flex flex-col space-y-1 justify-center items-center py-12 md:py-24 text-center">
                <h1 className="text-error font-medium uppercase">404 Error</h1>
                <h1 className="font-bold text-3xl text-secondary">{strings.not_found}</h1>
                <p className="text-sm pb-5 text-gray-400">{strings.not_found_desc}</p>
                <Link to={appRoutes.HOME_PAGE} className="text-sm">
                    {' '}
                    &#8592; {strings.go_back}
                </Link>
            </div>
        </Layout>
    );
};
