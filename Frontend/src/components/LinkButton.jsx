export default function LinkButton({
  value,
  name,
  onClick = () => {},
  selected,
  ...props
}) {
  return (
    <div
      className={`LinkButton ${selected ? "selected" : ""}`}
      name={name}
      onClick={() => onClick(name)}
      {...props}
    >
      {value}
    </div>
  );
}
