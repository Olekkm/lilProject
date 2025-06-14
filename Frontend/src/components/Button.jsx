export default function Button({ value, name, classNames, ...props }) {
  return (
    <button className={`Button ${classNames}`} name={name} {...props}>
      {value}
    </button>
  );
}
