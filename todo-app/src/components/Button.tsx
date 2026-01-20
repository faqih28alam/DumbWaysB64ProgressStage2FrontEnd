type ButtonProps = {
  btnText: string;
  btnColor?: string;
  evenOnClick?: () => void;
};

export const Button = ({ btnText, btnColor, evenOnClick }: ButtonProps) => {
  return (
    <button className={`todo-${btnColor}`} onClick={evenOnClick}>
      {btnText}
    </button>
  );
};
