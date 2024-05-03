import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface IDefaultTextFieldProps {
  errorMessage: string;
  iconPath: string;
  iconAlt: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError?: boolean;
  id: string;
}

const DefaultTextField = ({
  errorMessage,
  iconPath,
  iconAlt,
  onIconClick,
  placeholder,
  onChange,
  value,
  isError = false,
  id,
}: IDefaultTextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
      ? "border-mono300"
      : "border-primary";

  return (
    <div>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
    text-primary
    border-b
    ${borderColor}
    `}
      >
        <input
          data-testid={id}
          id={id}
          className="outline-none"
          placeholder={placeholder}
          value={value}
          type="text"
          onChange={onChange}
        />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default DefaultTextField;

// DefaultTextField는 hover시 색상이 변하는 등 특정 상황에 대한 종속적인 개념을 가지고 있는 컴포넌트
// 만약 조금이라도 UI가 변경되거나 복잡해진다면 props를 계속 추가해야할텐데 한계가 있을 듯?
// 그래서 너무 많은 확장성을 고려하고 짜는 것 보다, 단일 컴포넌트를 적절히 조합하는게 필요할거같다.
