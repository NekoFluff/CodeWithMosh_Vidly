import React from "react";

const Input = ({ name, id, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input autoFocus name={name} className="form-control" id={id} {...rest} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
