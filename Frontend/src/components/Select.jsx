export default function Select({
  id,
  value,
  options,
  label,
  onChange = () => {},
  ...props
}) {
  return (
    <div style={{ width: "300px" }}>
      <label htmlFor={id}>{label} </label>

      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      >
        <option value="">Не выбрано</option>
        {options?.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
