import { StyledComponent, StyleProps, StyleProp } from './data';

export interface StyledComponentView extends StyledComponent {
  onChange: any;
}

export interface StylePropsView {
  id: number;
  propValues: StyleProps;
  onChange: any;
}

export interface StylePropView extends StyleProp {
  id: number;
  propValueName: string;
  onChange: any;
}
