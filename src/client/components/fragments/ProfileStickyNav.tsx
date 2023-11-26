import ProfileContext from '@/utils/context/ProfileContext';
import useLogout from '@/utils/hooks/useLogout';
import { useContext } from 'react';

const ProfileStickyNav = () => {
    const { isActive, setIsActive } = useContext(ProfileContext);
    return (
        <div className="card bg-white w-1/2 max-w-xs max-h-72 shadow-custom inset-3 sticky lg:top-28 md:top-40 hidden md:block">
            <div className="card-body rounded-xl">
                <ul className="my-2">
                    <li className="p-3 text-lg">
                        <button
                            className={`${isActive === 'order-list' ? 'text-tertiary btn-ghost' : 'btn-ghost'} btn`}
                            onClick={() => setIsActive('order-list')}
                        >
                            Pesanan Saya
                        </button>
                    </li>
                    <li className="p-3 text-lg">
                        <button
                            className={`${
                                isActive === 'profile' || isActive === 'address'
                                    ? 'text-tertiary btn-ghost'
                                    : 'btn-ghost'
                            } btn`}
                            onClick={() => setIsActive('profile')}
                        >
                            Akun Saya
                        </button>
                    </li>
                    <li className="p-3 text-lg mt-6 bg-transparent">
                        <button className="btn btn-ghost hover:btn-error" onClick={useLogout}>
                            Keluar
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileStickyNav;
