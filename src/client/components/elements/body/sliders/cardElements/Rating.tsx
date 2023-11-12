const Rating = ({ rating }: { rating: number }) => {
    return (
        <>
            <div className="text-end mt-3 text-xs">
                <p>Rating : {rating}</p>
            </div>
        </>
    );
};

export default Rating;
