import * as React from 'react';
import { StylePropsView } from './interface/views';
import { UIStyleProp } from './ui-style-prop';
import { successfulContrast, convertHexToRgb, relativeLuminance, getRatio } from './helpers/validation';

enum propValueList {
  background,
  textColor,
  foreground,
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
      <div style={{
        "background-color": propValues.background.value,
        "padding": "1em",
        "color": propValues.textColor.value,
        "display": 'inline-block',
        "margin-top": "16px",
        "font-size": "20px"
      }}>
        { successfulContrast(propValues.textColor.value, propValues.background.value) ? 
            'Way to go' : 
            'Sucks' }
        <p>{ `background: 
              r: ${convertHexToRgb(propValues.background.value).r}
              g: ${convertHexToRgb(propValues.background.value).g} 
              b: ${convertHexToRgb(propValues.background.value).b}
        ` }</p>
        <p>{ `foreground: 
              r: ${convertHexToRgb(propValues.textColor.value).r}
              g: ${convertHexToRgb(propValues.textColor.value).g} 
              b: ${convertHexToRgb(propValues.textColor.value).b}
        ` }</p>
        <p>{ `relative luminance: ${relativeLuminance(convertHexToRgb(propValues.background.value))}` }</p>
        <p>{ `ratio: ${getRatio(relativeLuminance(convertHexToRgb(propValues.textColor.value)), relativeLuminance(convertHexToRgb(propValues.background.value)))}` }</p>
      </div>
      <button style={{"background-color": propValues.background.value,
                      "padding": "1em",
                      "color": propValues.textColor.value,
                      "display": 'inline-block',
                      "margin-top": "16px",
                      "font-size": "20px"}}/>
    </ul>
  );
};

export { UIStyleProps };