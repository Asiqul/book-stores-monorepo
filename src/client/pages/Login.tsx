import AuthButton from '@/components/elements/auth/AuthButton';
import AuthForm from '@/components/elements/auth/AuthForm';
import AuthTitle from '@/components/elements/auth/AuthTitle';
import FacebookButton from '@/components/elements/auth/FacebookButton';
import GoogleButton from '@/components/elements/auth/GoogleButton';
import MinLayout from '@/components/layouts/MinLayout';
import useTitle from '@/utils/hooks/useTitle';
import axios from '@/utils/services/axiosInstance';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { SyntheticEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    useTitle('Masuk');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

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
            Cookies.set('_bk_sess', accessToken, { secure: true, sameSite: 'strict' });
            Cookies.set('_sess_exp', String(decoded.exp), { secure: true, sameSite: 'lax' });
            navigate(from, { replace: true });
        } catch (err: any) {
            setIsLoading(false);
            toast.error(err.response.data.message);
            setError(err.response.data.message);
        }
    };
    return (
        <MinLayout>
            <div className="container mx-auto my-4 md:w-1/2 xl:w-1/3 min-h-screen">
                <form onSubmit={handleLogin}>
                    <AuthTitle title="Masuk" />
                    {error && (
                        <ToastContainer
                            className="mt-10 lg:mt-20 -z-10"
                            position="top-center"
                            autoClose={1500}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                    )}
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
