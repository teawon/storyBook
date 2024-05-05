interface ITagButtonProps {
  children: string;
  isChecked: boolean;
  onClick: () => void;
}

const TagButton = ({ children, isChecked, onClick }: ITagButtonProps) => {
  const buttonStyle = isChecked
    ? "bg-white text-primary"
    : "text-white bg-dark-opacity";

  return (
    <button
      className={`
          rounded-tag-button
          px-[10px] border
          border-white
          h-[33px]
          text-sm
          font-medium
          ${buttonStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TagButton;
