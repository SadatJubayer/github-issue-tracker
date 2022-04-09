interface ILayoutProps {
    children: React.ReactNode;
    bgWithSvg?: boolean;
}

export const Layout = ({ children, bgWithSvg = false }: ILayoutProps) => {
    return (
        <div
            className="min-h-screen flex justify-center items-center bg-background text-secondary  bg-center bg-cover"
            style={{ backgroundImage: `${bgWithSvg ? 'url(/images/bg.svg)' : ''}` }}
        >
            <main className="p-3 md:p-5">{children}</main>
        </div>
    );
};
