import * as React from 'react';
import { ColorInput } from './ui/color-input';
import { StylePropView } from './interface/views';

const UIStyleProp = ({propValueName, label, description, inputType, value, onChange}: StylePropView) => {
  function updateProp(e: React.FormEvent<HTMLInputElement>) {
    return onChange(e, propValueName);
  }
  const inputTypes = {
    'ColorPicker': <ColorInput value={value} name={label} onChange={updateProp} />,
    default: <p>{inputType} is not a valid input type</p>
  };
  if (!inputTypes[inputType]) {
    return inputTypes.default;
  }
  return (
    <li>
      <p>{label}</p>
      <p>{description}</p>
      {inputTypes[inputType]}
    </li>
  );
};

export { UIStyleProp };