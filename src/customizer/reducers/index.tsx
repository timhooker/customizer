import { StyledComponent } from "../interface";
import { combineReducers } from "redux";
import { updateBackgroundProps } from "../interface/transforms";

export function components( componentList: StyledComponent[] = [],
                            { type, id, value }: updateBackgroundProps): {} {
  switch (type) {
  case "UPDATE_BACKGROUND":
    return componentList.map((prop: StyledComponent) => {
      if (prop.id === id) {
        prop.propValues.background.value = value;
      }
      return prop;
    });
  case "UPDATE_TEXTCOLOR":
    return componentList.map((prop: StyledComponent) => {
      if (prop.id === id && prop.propValues.textColor) {
        prop.propValues.textColor.value = value;
      }
      return prop;
    });
  default:
    return componentList.map((prop) => prop);
  }
}

// The root state for the customizer component
export default combineReducers({
  components,
});
