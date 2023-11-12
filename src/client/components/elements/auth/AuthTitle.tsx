const AuthTitle = ({ title }: { title: string }) => {
    return (
        <div>
            <h1 className="text-tertiary text-[1.75rem] mt-16 mb-10 lg:mt-36">{title}</h1>
        </div>
    );
};

export default AuthTitle;
