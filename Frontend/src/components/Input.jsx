export default function Input({
  id,
  value,
  placeholder,
  label,
  onChange = () => {},
  ...props
}) {
  return (
    <div style={{ width: "300px" }}>
      <label style={{ display: "inline" }} htmlFor={id}>
        {label}{" "}
      </label>

      <input
        id={id}
        onChange={onChange}
        type="text"
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
