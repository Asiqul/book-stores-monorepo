const BannerCategory = ({ image, alt }: { image: string; alt: string }) => {
    return (
        <>
            <img src={image} alt={alt} className="object-contain" width={210} height={300} />
        </>
    );
};

export default BannerCategory;
