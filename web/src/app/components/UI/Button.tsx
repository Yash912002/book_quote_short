type ButtonProps = {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactElement;
  className: string;
}

export const Button = ({ onClick, disabled, children, className }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={className}
      >
        {children}
      </button>
    </>
  )
}