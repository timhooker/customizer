import { StyledComponent, StyleProps, StyleProp } from './data';

export interface StyledComponentView extends StyledComponent {
  onChange: any;
}

export interface StylePropsView {
  propValues: StyleProps;
  onChange: any;
}

export interface StylePropView extends StyleProp {
  propValueName: string;
  onChange: any;
}
