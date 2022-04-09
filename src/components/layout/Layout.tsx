import { Navbar } from './Navbar';

interface ILayoutProps {
    children: React.ReactNode;
    bgWithSvg?: boolean;
}

export const Layout = ({ children, bgWithSvg = false }: ILayoutProps) => {
    return (
        <div
            className="min-h-screen bg-background p-3 md:p-5 text-secondary bg-no-repeat bg-cover"
            style={{
                backgroundImage: `${bgWithSvg ? 'url(/images/bg.svg)' : ''}`,
                backgroundPosition: '-200px -250px',
            }}
        >
            <Navbar />
            <main className="max-w-7xl mx-auto">{children}</main>
        </div>
    );
};
