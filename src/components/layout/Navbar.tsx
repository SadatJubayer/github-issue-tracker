import { AppIcon } from 'assets/icons';
import { Link } from 'react-router-dom';
import { appRoutes } from 'utils';

export const Navbar = () => {
    return (
        <nav className="self-start py-3 md:py-5 max-w-7xl mx-auto">
            <Link to={appRoutes.HOME_PAGE}>
                <AppIcon />
            </Link>
        </nav>
    );
};
