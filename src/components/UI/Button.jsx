const Button = (props) => {
  return (
    <button onClick={props.onClick} disabled={props.disabled} className={`rounded-lg py-4 px-5 ${props.className}`}>
      <span className="text"> {props.children}</span>
    </button>
  );
};
export default Button;
