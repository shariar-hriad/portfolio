/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            poppins: 'Poppins, sans-serif',
        },
        extend: {
            container: {
                center: true,
                padding: '15px',
            },
        },
    },
    plugins: [],
};
