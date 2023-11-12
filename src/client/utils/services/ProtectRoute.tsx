import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

function ProtectRoute() {
    const session = Cookies.get('_bk_sess');
    const location = useLocation();

    return session ? <Navigate to={location.state?.from} state={{ from: '/' }} replace /> : <Outlet />;
}

export default ProtectRoute;
