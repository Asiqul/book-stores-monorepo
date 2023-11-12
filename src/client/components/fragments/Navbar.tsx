import Cookies from 'js-cookie';
import LoginButton from '../elements/body/buttons/LoginButton';
import Category from '../elements/body/headers/Category';
import Logo from '../elements/body/headers/Logo';
import Menu from '../elements/body/headers/Menu';
import Search from '../elements/body/headers/Search';
import Users from '../elements/body/headers/Users';
import { useState } from 'react';

const menus = {
    Category: 'Kategori',
    Cart: 'Keranjang',
    Login: 'Masuk',
    Help: 'Bantuan',
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="w-full bg-main border-b-2 border-transparent shadow-md fixed top-0 z-20">
            <div
                className={`absolute w-full bg-body z-10 top-12 px-3 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } duration-200`}
            >
                <ul className="flex flex-col gap-2 px-3 py-3 bg-body border-t-2 border-gray border-opacity-30">
                    {Object.entries(menus).map(([key, value]) => (
                        <li
                            key={key}
                            className="py-2.5 border-b-[1px] border-gray border-opacity-20 text-gray hover:brightness-50 transition-all duration-200 ease-in-out cursor-pointer"
                        >
                            {value}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container mx-auto lg:my-4">
                <div className="flex justify-between items-center">
                    <Menu onClick={() => setIsOpen(!isOpen)} />
                    <Logo />
                    <Category />
                    <div className="hidden lg:block lg:w-1/2">
                        <Search />
                    </div>
                    <Users />
                    {Cookies.get('_bk_sess') ? null : <LoginButton />}
                </div>
                <div className="my-4 px-3 lg:hidden">
                    <Search />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
