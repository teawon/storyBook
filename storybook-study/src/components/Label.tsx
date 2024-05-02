interface ILabelPRops {
  htmlFor: string;
  children: string;
}

const Label = ({ htmlFor, children }: ILabelPRops) => {
  return (
    <label className="text-sm" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
