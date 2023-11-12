import { AuthButtonProps } from '@/types/props.type';
import { Link } from 'react-router-dom';

const AuthButton = (props: AuthButtonProps) => {
    const { tag, type, disabled } = props;
    return (
        <div className="flex flex-col justify-center items-center gap-7 mt-10">
            {tag == 'Masuk' ? (
                <a
                    href="#"
                    className="font-semibold text-tertiary border-b-2 border-transparent  hover:border-tertiary transition-all duration-100 ease-in"
                >
                    Lupa kata sandi?
                </a>
            ) : (
                <div className="flex gap-3 justify-center items-center">
                    <input type="checkbox" className="checkbox checkbox-sm checkbox-accent" required />
                    <p className="text-md text-tertiary">
                        Dengan mendaftar, anda menyetujui{' '}
                        <a
                            href="#"
                            className="font-semibold text-tertiary hover:border-b-2 border-tertiary transition-all duration-100 ease-in"
                        >
                            Syarat dan Ketentuan.
                        </a>
                    </p>
                </div>
            )}
            <button
                type={type}
                disabled={disabled}
                className="btn btn-ghost bg-second rounded-full font-heading text-lg font-semibold w-full text-main hover:text-second"
            >
                {disabled ? <span className="loading loading-spinner loading-md text-tertiary"></span> : tag}
            </button>
            <div>
                {tag == 'Masuk' ? (
                    <span>
                        Belum punya akun?{' '}
                        <Link
                            to="/register"
                            className="font-semibold text-tertiary hover:border-b-2 border-tertiary transition-all duration-100 ease-in"
                        >
                            Daftar
                        </Link>
                    </span>
                ) : (
                    <div>
                        <span>Sudah punya akun?</span>{' '}
                        <Link
                            to="/login"
                            className="font-semibold text-tertiary hover:border-b-2 border-tertiary transition-all duration-100 ease-in"
                        >
                            Masuk
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthButton;
