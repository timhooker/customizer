import * as React from 'react';
import { StyledComponentList } from '../interface/data';
import { ComponentCss } from './component-css';

function CssGenerator({components}: StyledComponentList) {
  return (
    <style>
      {components.map( el => ComponentCss(el.selector, el.propValues) )}
    </style>
  );
}

export default CssGenerator;