/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // 이걸 넣어야 React에서 작성한 스타일이 반영된다고 함
  theme: {
    extend: {},
  },
  plugins: [],
};
