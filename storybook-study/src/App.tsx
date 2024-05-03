import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Label from "./components/Label";
import DefaultTextField from "./components/DefaultTextField";

function App() {
  const [isError, setIsError] = useState(false);

  return (
    <>
      <Label htmlFor="email" children="이메일" />
      <DefaultTextField
        id="email"
        value=""
        placeholder="이메일을 입력해주세요."
        iconPath="/vite.svg"
        iconAlt="icon"
        onChange={() => {}}
        onIconClick={() => {}}
        errorMessage="이메일을 입력해주세요."
        isError={isError}
      />

      <div className="my-20" />
      <Label htmlFor="username" children="닉네임" />
      <DefaultTextField
        id="username"
        value=""
        placeholder="이름을 입력해주세요."
        iconPath="/vite.svg"
        iconAlt="icon"
        onChange={() => {}}
        onIconClick={() => {}}
        errorMessage="이메일을 입력해주세요."
        isError={isError}
      />

      <button onClick={() => setIsError((prev) => !prev)}>에러 토글</button>
    </>
  );
}

export default App;
