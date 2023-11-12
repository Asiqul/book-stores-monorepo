const BigFooter = () => {
    return (
        <>
            <footer className="footer py-10 text-base-content hidden xl:flex justify-between gap-72">
                <nav>
                    <header className="footer-title text-tertiary brightness-75">Produk BukuKita</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">BukuKita Affiliate</a>
                    <a className="link link-hover">Mitra BukuKita</a>
                    <a className="link link-hover">Marketing</a>
                </nav>
                <nav>
                    <header className="footer-title text-tertiary brightness-75">Belanja</header>
                    <a className="link link-hover">Berbelanja</a>
                    <a className="link link-hover">Pembayaran</a>
                    <a className="link link-hover">Pegiriman</a>
                </nav>
                <nav>
                    <header className="footer-title text-tertiary brightness-75">Tentang BukuKita</header>
                    <a className="link link-hover">Tentang Kami</a>
                    <a className="link link-hover">Toko Kami</a>
                    <a className="link link-hover">Kerjasama</a>
                </nav>
                <nav>
                    <header className="footer-title text-tertiary brightness-75">Lainnya</header>
                    <a className="link link-hover">Syarat & Ketentuan</a>
                    <a className="link link-hover">Kebijakan & Privasi</a>
                    <a className="link link-hover">Bantuan</a>
                    <a className="link link-hover">Hubungi Kami</a>
                </nav>
            </footer>
        </>
    );
};

export default BigFooter;
