import AuthButton from '@/components/elements/auth/AuthButton';
import AuthForm from '@/components/elements/auth/AuthForm';
import AuthTitle from '@/components/elements/auth/AuthTitle';
import FacebookButton from '@/components/elements/auth/FacebookButton';
import GoogleButton from '@/components/elements/auth/GoogleButton';
import ToastWrapper from '@/components/elements/body/toast/ToastWrapper';
import MinLayout from '@/components/layouts/MinLayout';
import useTitle from '@/utils/hooks/useTitle';
import axios from '@/utils/services/axiosInstance';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { SyntheticEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    useTitle('Masuk');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            setIsLoading(true);
            const response = await axios.post(
                '/auth/user/login',
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                }
            );
            const accessToken = response?.data.accessToken;
            const decoded = jwtDecode(accessToken);
            console.log(decoded);
            Cookies.set('_bk_sess', accessToken, { secure: true, sameSite: 'strict' });
            Cookies.set('_sess_exp', String(decoded.exp), { secure: true, sameSite: 'lax' });
            toast.success('Berhasil masuk', {
                onClose: () => {
                    navigate(from, { replace: true });
                },
            });
        } catch (err: any) {
            setIsLoading(false);
            toast.error(err.response.data.message, {
                onClose: () => {
                    navigate(0);
                },
            });
        }
    };
    return (
        <MinLayout>
            <ToastWrapper />
            <div className="container mx-auto my-4 md:w-1/2 xl:w-1/3 min-h-screen">
                <form onSubmit={handleLogin}>
                    <AuthTitle title="Masuk" />
                    <AuthForm
                        name="email"
                        type="email"
                        placeholder="Masukkan email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <AuthForm
                        name="password"
                        type="password"
                        placeholder="Masukkan kata sandi"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <AuthButton tag="Masuk" type="submit" disabled={isLoading} />
                    <GoogleButton tag="Masuk" />
                    <FacebookButton tag="Masuk" />
                </form>
            </div>
        </MinLayout>
    );
};

export default Login;
