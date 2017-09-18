import * as React from 'react';
import { StyledComponentView } from './interface/views';
import { UIStyleProps } from './ui-style-props';

const UIElement = ({id, name, description, propValues, onChange}: StyledComponentView) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
      <UIStyleProps propValues={propValues} onChange={onChange} />
    </div>
  );
};

export { UIElement };