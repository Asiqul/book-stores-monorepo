import useLogout from '@/utils/hooks/useLogout';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Users = () => {
    return (
        <div className={`${Cookies.get('_bk_sess') ? '' : 'lg:hidden'} pb-2 pt-2`}>
            <details className="dropdown dropdown-end">
                <summary className="btn btn-ghost btn-circle">
                    <img src="/icons/user-icon.svg" alt="" className="bg-transparent" width={33} height={33} />
                </summary>
                <ul className="p-2 shadow-lg menu dropdown-content dropdown-end z-[1] bg-main rounded-box w-56">
                    {Cookies.get('_bk_sess') ? (
                        <>
                            <li className="py-1">
                                <Link to="/dashboard" className="justify-between">
                                    Akun Saya
                                </Link>
                            </li>
                            <li className="py-1">
                                <a>Settings</a>
                            </li>
                            <li className="my-1.5">
                                <a
                                    className="btn btn-error btn-sm align-center place-content-center py-5 w-1/2"
                                    onClick={useLogout}
                                >
                                    Logout
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="my-1.5 hover:text-tertiary">
                                <Link to="/register">Daftar</Link>
                            </li>
                            <li className="my-1.5 hover:text-tertiary">
                                <Link to="/login">Masuk</Link>
                            </li>
                        </>
                    )}
                </ul>
            </details>
        </div>
    );
};

export default Users;
