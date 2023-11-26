const Loading = ({ height }: { height?: string }) => {
    return (
        <div className={`flex justify-center items-center ${height ? height : 'h-screen'}`}>
            <span className="loading loading-spinner loading-lg text-second"></span>
        </div>
    );
};

export default Loading;
