import { SyntheticEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
    const [newQuery] = useSearchParams();
    const [query, setQuery] = useState(newQuery.get('q') || '');

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        window.location.href = encodeURI(`/search?q=${query}&based_on=title`);
    };

    return (
        <div className="justify-center">
            <form onSubmit={handleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 bg-transparent pointer-events-none">
                        <svg
                            className="w-4 h-4 text-border"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        defaultValue={query}
                        className="w-full p-3 pl-10 text-sm text-border border border-second rounded-full bg-white focus:ring-second focus:border-second"
                        placeholder="Cari Produk, Judul Buku, Penulis"
                        onChange={(e) => setQuery(e.target.value)}
                        required
                    ></input>
                    <button
                        type="submit"
                        className="text-[#FFFFFF] absolute right-1.5 bottom-[0.32rem] bg-second hover:bg-tertiary focus:ring-2 focus:outline-none focus:ring-second font-medium rounded-full text-sm px-5 py-2"
                    >
                        Cari
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Search;
