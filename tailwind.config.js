const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#9A41EA',
                secondary: '#E6E7E9',
                error: '#FF0000',
                success: '#0DD9A8',
                background: '#040C28',
                hover: '#1D243D',
                blue: '#3267F0',
                tooltip: '#3D0C23',
            },
            opacity: {
                12: '.12',
                14: '.14',
                28: '.28',
            },
        },
    },
    plugins: [],
};
