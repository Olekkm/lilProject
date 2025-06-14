export default function KeyValue({ _key, children }) {
  return (
    <div style={{ display: "inline" }}>
      <span className="semiHeaderText">{_key}</span>
      <span className="defaultText"> : {children}</span>
    </div>
  );
}
