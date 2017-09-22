import * as React from 'react';
import { StylePropsView } from './interface/views';
import { UIStyleProp } from './ui-style-prop';
import { successfulContrast } from './helpers/validation';

enum propValueList {
  background,
  textColor,
  borderWidth
}

const UIStyleProps = ({id, propValues, onChange}: StylePropsView) => {
  return (
    <ul>
      {Object.keys(propValueList).map((value, i) => {
        if (!propValues[value]) {
          return null;
        }
        return (
          <UIStyleProp key={i} id={id} propValueName={value} {...propValues[value]} onChange={onChange}  />
        );
      })}
      <button 
        className="rz-btn-default" 
        style={{'background-color': propValues.background.value,
                'color': propValues.textColor.value }}
      >
        { successfulContrast(propValues.textColor.value, propValues.background.value) ? 
          'Example' : 
          'Low Contrast' }
      </button>
    </ul>
  );
};

export { UIStyleProps };