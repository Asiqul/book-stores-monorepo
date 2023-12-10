import { SubtitleProps } from '@/types/props.type';
import { Link } from 'react-router-dom';

const Subtitle = (props: SubtitleProps) => {
    const { title, expand, keyword } = props;
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-xl lg:text-2xl">{title}</h1>
                <Link
                    to={`/search?based_on=${keyword}&limit=15&page=1`}
                    className={`${
                        expand ? 'block' : 'hidden'
                    } text-sm lg:text-base font-semibold text-tertiary hover:text-second transition duration-200 ease-in`}
                >
                    Lihat Semua
                </Link>
            </div>
        </>
    );
};

export default Subtitle;
