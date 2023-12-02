import { ToastContainer } from 'react-toastify';

const ToastWrapper = () => {
    return (
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
    );
};

export default ToastWrapper;
