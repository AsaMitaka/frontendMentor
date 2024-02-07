interface BtnProps {
  actionLabel: string;
  disabled?: boolean;
  onClick: () => void;
  outline?: boolean;
}

const Btn = ({ actionLabel, disabled, onClick, outline }: BtnProps) => (
  <button
    className={`btn ${disabled && 'disabled'} ${outline && 'outline'}`}
    disabled={disabled}
    onClick={onClick}
  >
    {actionLabel}
  </button>
);

export default Btn;
