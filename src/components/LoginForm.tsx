import { useState } from "react";
import DefaultTextField from "./DefaultTextField";
import Label from "./Label";
import PrimaryButton from "./PrimaryButton";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div>
      <Label htmlFor="email" children="이메일" />
      <DefaultTextField
        id="email"
        value={email}
        placeholder="이메일을 입력해주세요."
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        iconAlt="delete"
        onChange={(e) => setEmail(e.target.value)}
        onIconClick={() => {}}
        errorMessage="이메일을 입력해주세요."
        isError={false}
      />
      <DefaultTextField
        id="password"
        value={password}
        placeholder="비밀번호를 입력해주세요."
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        iconAlt="delete"
        onChange={(e) => setPassword(e.target.value)}
        onIconClick={() => {}}
        errorMessage="비밀번호를 입력해주세요."
        isError={false}
      />
      <PrimaryButton
        children="로그인"
        onClick={() => {}}
        theme={"dark"}
        disabled={!email || !password}
      />
    </div>
  );
};

export default LoginForm;
