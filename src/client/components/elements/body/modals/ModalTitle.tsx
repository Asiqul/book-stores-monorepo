const ModalTitle = ({ title }: { title: string }) => {
    return (
        <div className="w-full flex justify-center items-center bg-transparent">
            <h3 className="font-semibold">{title}</h3>
        </div>
    );
};

export default ModalTitle;
