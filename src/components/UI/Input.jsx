import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      {props.label && (
        <label className="block mb-2" htmlFor={props.id}>
          <span className={`font-bold ${props.disabled && "text-grey200"}`}>
            {props.label}
          </span>
        </label>
      )}
      <input
        className={`${props.inputClass} rounded-lg border-[1px] border-solid border-lightGrey p-3`}
        placeholder={props.placeholder}
        value={props.placeholder}
        type={props.type}
        id={props.id}
        disabled={`${props.disabled ? "disabled" : ""}`}
      />
    </div>
  );
});

export default Input;
