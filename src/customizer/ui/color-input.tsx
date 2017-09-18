import * as React from 'react';
import { invalidHexMessage } from '../helpers/validation';

function ColorInput({value, name, onChange}: React.InputHTMLAttributes<HTMLInputElement>) {

  return ( 
    <div>
      <Input value={value} name={name} type="text" onChange={onChange} /> 
      <Input value={value} name={name} type="color" onChange={onChange} />
      <span>{ invalidHexMessage(value) }</span>
    </div>
  );
}

function Input({value, type, name, onChange}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label htmlFor={name}>{name}
      <input name={name} type={type} value={value} onChange={onChange} />
    </label>
  );
}

export { Input, ColorInput };