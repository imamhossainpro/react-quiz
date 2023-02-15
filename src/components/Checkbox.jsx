import React from "react";

const Checkbox = ({ className, text, ...rest }) => {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      &#160;<span>{text}</span>
    </label>
  );
};

export default Checkbox;
