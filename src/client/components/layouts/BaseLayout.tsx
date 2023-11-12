import Subscriptions from '../elements/body/footers/Subscriptions';
import Footer from '../fragments/Footer';
import Navbar from '../fragments/Navbar';

function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen relative">
            <div className="mb-40 lg:mb-28">
                <Navbar />
            </div>
            {children}
            <Subscriptions />
            <Footer />
        </div>
    );
}

export default BaseLayout;
