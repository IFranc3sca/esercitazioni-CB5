import "./button.css";

export function Button(props) {
  console.log("props di Button:", props);

  const { className = "", variant = "none", ...otherAttributes } = props;

  return (
    <button
      className={`Button Button--variant-${variant} ${className}`}
      {...otherAttributes}
    ></button>
  );
}
