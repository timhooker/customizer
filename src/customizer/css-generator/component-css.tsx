import { StyleProps } from '../interface/data';

function ComponentCss(selector:string, propValues:StyleProps) {
  return `${selector} { ${CssProps(propValues)} }`;
}
const propValueList = {
  "background": "background-color",
  "textColor": "color",
  "borderWidth": "border-width"
}

function CssProps(propValues: StyleProps) {
  var accumulator:string = '';
  Object.keys(propValues).map( (propValue) => {
    accumulator += propValueList[propValue] && propValues[propValue].value ? 
      `${propValueList[propValue]}: ${propValues[propValue].value}; ` :
      '';
    }
  )
  return accumulator;
}

export { ComponentCss };