import cn from 'classnames';
import { Navbar } from './Navbar';

interface ILayoutProps {
    children: React.ReactNode;
    bgWithSvg?: boolean;
    centerContent?: boolean;
}

const BG_SVG_URL = 'url(/images/bg.svg)';

export const Layout = ({ children, bgWithSvg, centerContent }: ILayoutProps) => {
    return (
        <div
            className="flex flex-col min-h-screen bg-background p-3 md:p-5 text-secondary bg-no-repeat bg-cover"
            style={{
                backgroundImage: `${bgWithSvg ? BG_SVG_URL : ''}`,
                backgroundPosition: '-200px -250px',
            }}
        >
            <Navbar />
            <main
                className={cn('max-w-7xl mx-auto grow w-full', {
                    'flex justify-center items-center mb-24': centerContent,
                })}
            >
                {children}
            </main>
        </div>
    );
};
