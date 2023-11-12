import { OthersAuthButtonProps } from '@/types/props.type';

const GoogleButton = (props: OthersAuthButtonProps) => {
    const { tag, type } = props;

    return (
        <div className="mt-10">
            <div className="flex justify-center items-center gap-2">
                <span className=" w-1/3 h-[1.5px] bg-border opacity-40"></span>
                <span className="text-sm text-border font-semibold italic">atau</span>
                <span className=" w-1/3 h-[1.5px] bg-border opacity-40"></span>
            </div>
            <div className="flex justify-center mt-5">
                <button
                    type={type}
                    className="btn btn-ghost bg-main border border-second rounded-full font-heading text-lg font-semibold w-full text-main hover:text-second"
                >
                    <img src="/icons/google.webp" alt="" className="w-10 bg-transparent" width={30} height={30} />{' '}
                    <span className="normal-case bg-transparent text-second text-sm">{tag} dengan akun Google</span>
                </button>
            </div>
        </div>
    );
};

export default GoogleButton;
