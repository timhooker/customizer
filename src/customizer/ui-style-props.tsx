import * as React from 'react';
import { StylePropsView } from './interface/views';
import { UIStyleProp } from './ui-style-prop';
import { successfulContrast } from './helpers/validation';

enum propValueList {
  background,
  textColor,
  borderWidth
}

const UIStyleProps = ({propValues, onChange}: StylePropsView) => {
  return (
    <ul>
      {Object.keys(propValueList).map((value, i) => {
        if (!propValues[value]) {
          return null;
        }
        return (
          <UIStyleProp key={i} propValueName={value} {...propValues[value]} onChange={onChange}  />
        );
      })}
      <button className="rz-btn-default" style={{
        "background-color": propValues.background.value,
        "color": propValues.textColor.value
      }}>
        { successfulContrast(propValues.textColor.value, propValues.background.value) ? 
            'Way to go' : 
            'Consider colors that contrast better' }
      </button>
    </ul>
  );
};

export { UIStyleProps };