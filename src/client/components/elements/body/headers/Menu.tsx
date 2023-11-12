import { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryItems from './CategoryItems';
import Logo from './Logo';

interface Props {
    onClick: () => void;
}

const Menu = (props: Props) => {
    const [catOpen, setCatOpen] = useState(false);

    return (
        <div className="lg:hidden">
            <div className="drawer z-50">
                <input id="drawer-side" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="drawer-side" className="btn btn-ghost btn-circle drawer-button">
                        <div className="space-y-1.5 lg:hidden bg-transparent">
                            <div className="w-6 h-0.5 rounded-full bg-tertiary"></div>
                            <div className="w-6 h-0.5 rounded-full bg-tertiary"></div>
                            <div className="w-6 h-0.5 rounded-full bg-tertiary"></div>
                        </div>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-side" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="menu p-4 w-[70%] min-h-full bg-white">
                        <div className="flex justify-center w-full h-10 items-center border-b border-border">
                            <Logo />
                        </div>
                        <ul className="py-5 font-heading md:text-base space-y-2">
                            <li
                                className="py-2 border-b border-border border-opacity-30 flex flex-row justify-between items-center cursor-pointer"
                                onClick={() => setCatOpen(!catOpen)}
                            >
                                Kategori
                                <img
                                    src="/icons/dropdown-arrow.svg"
                                    alt="arrow-down"
                                    width={27}
                                    height={27}
                                    className={`p-0 ${-catOpen ? '' : '-rotate-90'}`}
                                />
                            </li>
                            <ul className={`${catOpen ? 'block' : 'hidden'} py-2 space-y-4 pl-5`}>
                                <CategoryItems />
                            </ul>
                            <Link
                                to="#"
                                className="py-2 border-b border-border border-opacity-30 flex flex-row justify-between items-center cursor-pointer"
                            >
                                Keranjang Saya
                                <img
                                    src="/icons/dropdown-arrow.svg"
                                    alt="arrow-down"
                                    width={27}
                                    height={27}
                                    className="p-0 -rotate-90"
                                />
                            </Link>
                            <li className="py-2 border-b border-border border-opacity-30 flex flex-row justify-between items-center cursor-pointer">
                                Bantuan
                                <img
                                    src="/icons/dropdown-arrow.svg"
                                    alt="arrow-down"
                                    width={27}
                                    height={27}
                                    className="p-0 -rotate-90"
                                />
                            </li>
                            <li className="py-2 border-b border-border border-opacity-30 flex flex-row justify-between items-center cursor-pointer">
                                Tentang Kami
                                <img
                                    src="/icons/dropdown-arrow.svg"
                                    alt="arrow-down"
                                    width={27}
                                    height={27}
                                    className="p-0 -rotate-90"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
