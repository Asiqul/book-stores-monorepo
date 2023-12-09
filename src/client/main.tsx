import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<App />} />
        </Routes>
    </BrowserRouter>
    // </React.StrictMode>
);
