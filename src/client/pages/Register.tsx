import AuthButton from '@/components/elements/auth/AuthButton';
import AuthForm from '@/components/elements/auth/AuthForm';
import AuthTitle from '@/components/elements/auth/AuthTitle';
import FacebookButton from '@/components/elements/auth/FacebookButton';
import GoogleButton from '@/components/elements/auth/GoogleButton';
import ToastWrapper from '@/components/elements/body/toast/ToastWrapper';
import MinLayout from '@/components/layouts/MinLayout';
import useTitle from '@/utils/hooks/useTitle';
import axios from '@/utils/services/axiosInstance';
import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    useTitle('Registrasi');
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.post(
                '/auth/user/register',
                {
                    firstname,
                    lastname,
                    email,
                    phone,
                    password,
                    confPassword,
                },
                {
                    withCredentials: true,
                }
            );
            navigate('/login');
        } catch (err: any) {
            toast.error(err.response.data.message, {
                onClose: () => {
                    navigate(0);
                },
            });
            setIsLoading(false);
        }
    };

    return (
        <MinLayout>
            <ToastWrapper />
            <div className="container mx-auto my-4 md:w-1/2 xl:w-1/3">
                <form onSubmit={handleRegister}>
                    <AuthTitle title="Daftar" />
                    <AuthForm
                        name="firstname"
                        type="text"
                        id="firstname"
                        placeholder="Masukkan nama depan"
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <AuthForm
                        name="lastname"
                        type="text"
                        id="lastname"
                        placeholder="Masukkan nama belakang"
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    <AuthForm
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Masukkan email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <AuthForm
                        name="phone"
                        type="tel"
                        id="phone"
                        placeholder="Masukkan No. Handphone"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <AuthForm
                        name="password"
                        type="password"
                        id="password"
                        placeholder="Masukkan kata sandi"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <AuthForm
                        name="confpassword"
                        type="password"
                        id="confpassword"
                        placeholder="Masukkan kembali kata sandi"
                        onChange={(e) => setConfPassword(e.target.value)}
                    />
                    <AuthButton tag="Daftar" type="submit" disabled={isLoading} />
                    <GoogleButton tag="Daftar" />
                    <FacebookButton tag="Daftar" />
                </form>
            </div>
        </MinLayout>
    );
};

export default Register;
