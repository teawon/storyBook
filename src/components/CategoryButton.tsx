import { flexColCenter } from "../minins/styles";

interface ICategoryButtonProps {
  iconPath: string;
  iconAlt: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CategoryButton = ({
  iconPath,
  iconAlt,
  text,
  onClick,
}: ICategoryButtonProps) => {
  return (
    <button
      className={`
            rounded-button-default
            border
            border-primary
            text-primary
            text-base
            font-bold
            pl-[22px] 
            pr-[21px]
            py-4
            ${flexColCenter}
         `}
      onClick={onClick}
    >
      <img alt={iconAlt} src={iconPath} />
      <p>{text}</p>
    </button>
  );
};

export default CategoryButton;
