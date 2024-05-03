interface IIconButtonProps {
  alt: string;
  iconPath: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ alt, iconPath, onClick }: IIconButtonProps) => {
  return (
    <button onClick={onClick}>
      <img alt={alt} src={iconPath} />
    </button>
  );
};

export default IconButton;

/**
 *  children으로 이미지를 넣기보다, 아예 아이콘의 경로를 넣도록 처리함
 */
