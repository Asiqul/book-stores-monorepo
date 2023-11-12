/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            main: '#F2F5F9',
            second: '#62B6B7',
            tertiary: '#439A97',
            white: '#FFFFFF',
            border: '#9ca3af',
            cards: '#97DECE',
            cards_wrapper: '#CBEDD5',
        },
        extend: {
            container: {
                padding: '14px',
            },
            boxShadow: {
                custom: '0 0 10px rgba(229,229,229,.8)',
            },
        },
        fontFamily: {
            logo: ['Raleway', 'serif'],
            heading: ['Poppins', 'serif'],
            body: ['Inter', 'sans-serif'],
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require('daisyui')],

    daisyui: {
        themes: false,
        base: false,
    },
};
