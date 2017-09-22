import * as React from 'react';
import * as styles from './inputs.css';

interface ColorInputView extends React.InputHTMLAttributes<HTMLInputElement> {
  cid: number;
  value: string;
  valueName: string;
  name: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

function ColorInput({cid, value, valueName,  name, onChange}: ColorInputView) {

  return ( 
    <label className={styles.colorPicker}>
      {name}
      <input type="color" className={styles.colorPickerColorInput} value={value} onChange={onChange} />
      <div className={styles.colorPickerSwatch} style={{backgroundColor: value}}></div>
    </label>
  );
}
interface LabeledInputView extends React.InputHTMLAttributes<HTMLInputElement> {
  cid: number;
  htmlFor?: string;
  valueName: string;
}
function LabeledInput({cid, value, valueName, type, name, onChange}: LabeledInputView) {
  const labelFor = `${cid}-${type}-${valueName}`;
  return (
    <label htmlFor={labelFor}>{name}
      <input id={labelFor} type={type} value={value} onChange={onChange} />
    </label>
  );
}

export { LabeledInput, ColorInput };