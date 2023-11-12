interface Props {
    src: string;
    alt: string;
}

const Content = (props: Props) => {
    return (
        <img
            className="rounded-lg h-full w-full object-cover"
            src={props.src}
            alt={props.alt}
            width={900}
            height={1200}
        />
    );
};

export default Content;
