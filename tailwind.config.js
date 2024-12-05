/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // React 프로젝트 파일들
    "./public/index.html",        // CRA의 HTML 파일
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


