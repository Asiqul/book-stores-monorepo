import React from 'react';

interface TitleTypesProps {
    title: string;
    author: { name: string }[];
}

const Title: React.FC<TitleTypesProps> = ({ title, author }) => {
    return (
        <>
            <div className="bg-transparent">
                <h3 className="text-lg text-opacity-50 font-heading text-border brightness-50">
                    {author?.map((item: any) => item.name + ' ')}
                </h3>
            </div>
            <div className="my-2 bg-transparent">
                <h2 className="bg-transparent">
                    <span className="font-heading text-3xl bg-transparent">{title}</span>
                </h2>
            </div>
        </>
    );
};

export default Title;
