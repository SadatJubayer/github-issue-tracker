import { AppLogo } from 'assets/icons';
import { Link } from 'react-router-dom';
import { appRoutes } from 'utils';

export const Navbar = () => {
    return (
        <nav className="py-3 md:py-5 max-w-[90%] md:max-w-7xl mx-auto self-start w-full">
            <Link to={appRoutes.HOME_PAGE}>
                <AppLogo />
            </Link>
        </nav>
    );
};
