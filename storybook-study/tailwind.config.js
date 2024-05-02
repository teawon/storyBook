/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // 이걸 넣어야 React에서 작성한 스타일이 반영된다고 함
  theme: {
    extend: {},
    fontFamily: {
      body: ["Noto Sans KR"],
    },
    fontSize: {
      // 자주 쓰이는 폰트를 정리하면 편함 (24px의 경우 bold가 자주들어간다면 한꺼번에 묶는 것)
      xs: [
        "12px",
        {
          lineHeight: "18px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "21px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      xl: ["20px", "30px"],
      "2xl": [
        "24px",
        {
          lineHeight: "36px",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
    },
    colors: {
      primary: " #1d2745",
      secondary: " #1de5d4",
      tertiary: " #f52c50",
      white: " #ffffff",
      mono100: " #f1f1f1",
      mono200: " #bebebe",
      mono300: " #d6d7d9",
      error: " #d01e1e",
    },
  },
  plugins: [],
};
