import { useLocation, Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

function RequireAuth() {
    const session = Cookies.get('_bk_sess');
    const location = useLocation();

    return session ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export default RequireAuth;
