import * as React from 'react';
import { StyledComponentView } from './interface/views';
import { UIStyleProps } from './ui-style-props';

const UIElement = ({id, name, description, propValues, onChange}: StyledComponentView) => {
  return (
    <li>
      <h4>{name}</h4>
      <p>{description}</p>
      <UIStyleProps id={id} propValues={propValues} onChange={onChange} />
    </li>
  );
};

export { UIElement };