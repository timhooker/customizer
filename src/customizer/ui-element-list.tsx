import * as React from "react";
import { connect } from "react-redux";
import { StyledComponent } from "./interface/data";
import { UIElement } from "./ui-element";
import CssGenerator from "./css-generator/index";
// import { updateBackground } from "./actions";
import * as styles from "./customizer.css";

export interface ElementListView {
  components: StyledComponent[];
  dispatch: (dispatch: {}) => ({});
}

function UIElementList({ components, dispatch }: ElementListView) {
  if (!components || !components.length) {
    return null;
  }
  return (
    <ul className={styles.customizer}>
      <CssGenerator components={components} />
      {components.map(({id, name, description, selector, propValues}) => {
        const values = {
          description,
          id,
          name,
          propValues,
          selector,
        };
        const onChange = (e: React.FormEvent<HTMLInputElement>, propValueName: string) => {
          // Make generic... This should be something like update
          const actionList = {
            background: "UPDATE_BACKGROUND",
            textColor: "UPDATE_TEXTCOLOR",
          };
          dispatch({type: actionList[propValueName], id, value: e.currentTarget.value});
        };
        return (
          <UIElement key={id} {...values} onChange={onChange}/>
        );
      })}
    </ul>
  );
}

const mapStateToProps = ({components}: ElementListView) => ({components});
const mapDispatchToProps = (dispatch: {}) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(UIElementList);
