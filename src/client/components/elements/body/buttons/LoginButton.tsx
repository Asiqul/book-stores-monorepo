import { Link } from 'react-router-dom';

const LoginButton = () => {
    return (
        <div className="hidden lg:block">
            <div>
                <Link to="/login">
                    <button className="btn btn-ghost rounded-full text-second font-heading font-semibold">Masuk</button>
                </Link>
            </div>
        </div>
    );
};

export default LoginButton;
