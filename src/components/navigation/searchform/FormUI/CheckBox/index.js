import React from "react";
import {
  Radio,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";

const style = {
  dislay: "inline-block",
};

const renderOptions = (options) => {
  return options.map((option) => (
    <div style={style} key={option} >
      <FormControlLabel
        value={option}
        control={<Radio />}
        label={option}
      />
    </div>
  ));
}


const CheckboxWrapper = ({label, legend, value, options, field, name, children,  ...props }) => {


const fieldName = name ||field.name


  return (
    <RadioGroup
      style={{ flexDirection: "row" }}
      {...field}
      {...props}
      name={fieldName}
    >
      {options ? renderOptions(options) : children}
    </RadioGroup>
  );
};

export default CheckboxWrapper;














//     margin: -46px 1px 2px 112px;
//     border: 1px solid red;
//     width: 100px;
//     background-color: pink;
// }