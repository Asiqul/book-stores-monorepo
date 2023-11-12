import { SubtitleProps } from '@/types/props.type';

const Subtitle = (props: SubtitleProps) => {
    const { title, expand } = props;
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-xl lg:text-2xl">{title}</h1>
                <a
                    href="#"
                    className={`${
                        expand ? 'block' : 'hidden'
                    } text-sm lg:text-base font-semibold text-tertiary hover:text-second transition duration-200 ease-in`}
                >
                    Lihat Semua
                </a>
            </div>
        </>
    );
};

export default Subtitle;
