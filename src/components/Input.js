import { Input } from "antd";
import React from "react";

const Inputs = ({ name, handleChange, value }) => {
  return (
    <div>
      {" "}
      <Input type="number" name={name} value={value} onChange={handleChange} />
    </div>
  );
};

export default Inputs;
