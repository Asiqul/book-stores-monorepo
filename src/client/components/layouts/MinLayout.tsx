import Logo from '../elements/body/headers/Logo';

const MinLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen">
            <div className="flex fixed bg-white top-0 w-full justify-center items-center py-2.5 lg:h-20 lg:py-3 drop-shadow-md border-b-2 border-border border-opacity-30 z-50">
                <Logo />
            </div>
            <section className="mt-40 lg:mt-28 container mx-auto ">{children}</section>
        </div>
    );
};

export default MinLayout;
