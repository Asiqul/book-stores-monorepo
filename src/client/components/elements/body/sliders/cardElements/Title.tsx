const Title = ({ title }: { title: string }) => {
    let newTitle = title?.slice(0, 20);
    return (
        <>
            <div className="mt-2">
                <h3 className={`text-sm md:text-md text-left ${title?.length > 20 ? `after:content-['...']` : ''}`}>
                    {newTitle}
                </h3>
            </div>
        </>
    );
};

export default Title;
