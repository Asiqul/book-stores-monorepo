import { OthersAuthButtonProps } from '@/types/props.type';

const FacebookButton = (props: OthersAuthButtonProps) => {
    const { tag, type } = props;

    return (
        <div className="mt-6">
            <div className="flex justify-center items-center gap-2 -z-">
                <span className=" w-1/3 h-[1.5px] bg-border opacity-40"></span>
                <span className="text-sm text-border font-semibold italic">Akun lainnya</span>
                <span className=" w-1/3 h-[1.5px] bg-border opacity-40"></span>
            </div>
            <div className="flex justify-center mt-5">
                <button
                    type={type}
                    className="btn btn-ghost bg-main border border-second rounded-full font-heading text-lg font-semibold w-full text-main hover:text-second"
                >
                    <img src="/icons/facebook.webp" alt="" className="w-6 bg-transparent" width={30} height={30} />{' '}
                    <span className="normal-case bg-transparent text-second text-sm ml-2">
                        {tag} dengan akun Facebook
                    </span>
                </button>
            </div>
        </div>
    );
};

export default FacebookButton;
