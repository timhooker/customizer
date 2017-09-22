import * as React from 'react';
import { connect } from 'react-redux';
import { StyledComponent } from './interface/data';
import { UIElement } from './ui-element';
import CssGenerator from './css-generator/index';
import * as styles from './customizer.css';

export interface ElementListView {
  components: Array<StyledComponent>;
  dispatch: (...args: {}[]) => void;
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
          id, 
          name, 
          description, 
          selector, 
          propValues
        };
        const onChange = (e: React.FormEvent<HTMLInputElement>, propValueName: string) => {
          // Make generic... This should be something like update
          const actionList = {
            background: 'UPDATE_BACKGROUND',
            textColor: 'UPDATE_TEXTCOLOR'
          };
          dispatch({type: actionList[propValueName], id: id, value: e.currentTarget.value});
        };
        return (
          <UIElement key={id} {...values} onChange={onChange}/>
        );
      })}
    </ul>
  );
}

const mapStateToProps = ({components}: ElementListView) => ({components});
const mapDispatchToProps = (dispatch: (...args: any[]) => void) => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProps)(UIElementList);