import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorPage from './pages/404';
import Dashboard from './pages/Dashboard';
import Checkout from './pages/Checkout';
const Homepage = lazy(() => import('./pages/Homepage'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
import Search from './pages/Search';
import RequireAuth from './utils/services/RequireAuth';
import ProtectRoute from './utils/services/ProtectRoute';
import Loading from './components/elements/body/modals/Loading';
import { ProductProvider } from './utils/context/productContext';

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route element={<ProtectRoute />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route element={<RequireAuth />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Route>
                <Route path="/search" element={<Search />} />
                <Route
                    path="/product-detail/:bookId"
                    element={
                        <ProductProvider>
                            <ProductDetail />
                        </ProductProvider>
                    }
                />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Suspense>
    );
}

export default App;
