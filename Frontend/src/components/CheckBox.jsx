import KeyValue from "./KeyValue";

export default function CheckBox({
  value,
  id,
  label,
  onChange = () => {},
  ...props
}) {
  return (
    <div style={{ width: "300px", display: "inline-block" }}>
      <label className="checkbox" htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={value}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
          {...props}
        />
        {label}
      </label>
    </div>
  );
}
