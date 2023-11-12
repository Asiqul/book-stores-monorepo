import React, { useEffect, useState } from 'react';

interface CoverTypesProps {
    cover: { cover: string }[];
}

const ImageCard: React.FC<CoverTypesProps> = ({ cover }) => {
    const [activeImg, setActiveImage] = useState('');

    useEffect(() => {
        if (cover && cover.length > 0) {
            setActiveImage(cover[0].cover);
        }
    }, [cover]);

    return (
        <>
            <div className="md:sticky w-full md:w-4/12 lg:w-[28%] md:h-1/6 md:left-0 md:top-36 lg:top-24">
                <div className="card w-full flex flex-col justify-center items-center gap-3 py-0">
                    <div className="bg-white object-contain py-4 rounded-lg flex justify-center items-center">
                        <img
                            src={activeImg}
                            alt=""
                            className="w-[260px] h-[260px] object-contain bg-transparent"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className=" w-full flex flex-row justify-center gap-1 xl:gap-2">
                        {cover?.map((img: any, index: number) => (
                            <div key={index} className="h-[4.8rem]">
                                <img
                                    key={index}
                                    src={img.cover}
                                    alt=""
                                    className="bg-white h-full p-2 rounded-md cursor-pointer object-contain hover:border-2 border-second transition-all duration-75 ease"
                                    onClick={() => setActiveImage(cover[index].cover)}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ImageCard;
