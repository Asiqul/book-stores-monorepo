const Author = ({ author }: { author: string }) => {
    return (
        <>
            <div className="text-xs lg:text-sm text-border text-left truncate">
                <h4>{author}</h4>
            </div>
        </>
    );
};

export default Author;
