import { useState } from 'react';

const Descbook = ({ children }: { children: string }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <>
            <div className="bg-transparent mt-2">
                <p className="px-2">
                    {isReadMore ? text?.slice(0, 500) : text}
                    <span
                        onClick={toggleReadMore}
                        className="text-tertiary cursor-pointer bg-transparent font-semibold"
                    >
                        {isReadMore ? '... Baca Selengkapnya' : ' Ringkas Deskripsi'}
                    </span>
                </p>
            </div>
        </>
    );
};

const Description = ({ description }: { description: string }) => {
    return (
        <div className="bg-white text-justify">
            <h2 className="bg-white">
                <Descbook>{description}</Descbook>
            </h2>
        </div>
    );
};

export default Description;
