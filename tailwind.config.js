module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx,html}',
        './pages/**/*.{vue,js,ts,jsx,tsx,html}',
        './components/**/*.{vue,js,ts,jsx,tsx,html}',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}
