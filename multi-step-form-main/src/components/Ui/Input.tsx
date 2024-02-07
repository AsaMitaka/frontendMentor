interface InputProps {
  actionLabel: string;
  errorMsg: string;
  htmlFor: string;
  onChange: (value: any) => void;
  placeholder: string;
  type?: 'text' | 'email';
  value: string;
}

const Input = ({
  actionLabel,
  errorMsg,
  onChange,
  htmlFor,
  placeholder,
  type = 'text',
  value,
}: InputProps) => (
  <label htmlFor={htmlFor} className="label">
    <div className="label__block">
      <div className="label__block-title">{actionLabel}</div>
      <div className={`label__block-error ${errorMsg && 'label__block-error'}`}>
        {errorMsg}
      </div>
    </div>
    <input
      className={`label__input ${errorMsg && 'label__input-error'}`}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  </label>
);

export default Input;
