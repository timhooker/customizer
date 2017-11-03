import { StyleProps } from "../interface/data";

function ComponentCss(selector: string, propValues: StyleProps) {
  return `${selector} { ${CssProps(propValues)} }`;
}
const propValueList = {
  background: "background-color",
  textColor: "color",
  borderWidth: "border-width",
};

function CssProps(propValues: StyleProps) {
  return Object.keys(propValues).reduce(
    (accumulator: string, propValue: string) => {
      const prop = propValues[propValue];
      const key = prop.key ? prop.key : propValueList[propValue];
      return accumulator += prop.value ?
          `${key}: ${prop.value}; ` :
          "";
    },
    "");
}

export { ComponentCss };
