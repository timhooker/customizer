import { StyleProps } from "../interface/data";

function ComponentCss(selector: string, propValues: StyleProps) {
  return `${selector} { ${CssProps(propValues)} }`;
}
const propValueList = {
  background: "background-color",
  textColor: "color",
  customCss: "customCss"
};

function CssProps(propValues: StyleProps) {
  return Object.keys(propValues).reduce(
    (accumulator: string, propValue: string) => {
      const prop = propValues[propValue];
      const key = prop.key ? prop.key : propValueList[propValue];
      const value = prop.value ?
        `${key}: ${prop.value}; ` :
        "";
      return accumulator += value;
    },
    "");
}

export { ComponentCss };
