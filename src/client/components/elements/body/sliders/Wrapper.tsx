const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="container mx-auto h-[180px] sm:h-[200px] md:h-[250px] lg:h-80 xl:h-96">{children}</section>
    );
};

export default Wrapper;
