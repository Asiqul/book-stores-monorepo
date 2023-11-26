import Cookies from 'js-cookie';
import { axiosPrivate } from '../services/axiosInstance';

const useLogout = () => {
    try {
        axiosPrivate
            .delete('/auth/user/logout', {
                headers: {
                    Authorization: `Bearer ${Cookies.get('_bk_sess')}`,
                },
            })
            .then(() => {
                Cookies.remove('_bk_sess');
                Cookies.remove('_sess_exp');
                localStorage.clear();
                window.location.href = '/';
            });
    } catch (error) {
        return Promise.reject(error);
    }
};

export default useLogout;
