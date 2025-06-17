export default function KeyValue({ _key, children, keyStyle }) {
  return (
    <div style={{ display: "inline" }}>
      <span className="semiHeaderText" style={keyStyle}>
        {_key}
      </span>
      <span className="defaultText"> : {children}</span>
    </div>
  );
}
