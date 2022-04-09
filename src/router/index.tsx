import { FourOhFourPage, HomePage, IssuesPage } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { appRoutes } from 'utils';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* App Routes */}
                <Route path={appRoutes.HOME_PAGE} element={<HomePage />} />
                <Route path={appRoutes.ISSUES_PAGE} element={<IssuesPage />} />

                {/* Other Routes */}
                <Route path={appRoutes.NOT_FOUND} element={<FourOhFourPage />} />
                <Route path="*" element={<FourOhFourPage />} />
            </Routes>
        </BrowserRouter>
    );
};
