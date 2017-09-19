export interface StyledComponentList {
  components: Array<StyledComponent>
}

export interface StyledComponent {
  id: number;
  name?: string;
  description?: string;
  selector: string;
  propValues: StyleProps;
}

export interface StyleProps {
  background: StyleProp;
  textColor: StyleProp;
  foreground?: StyleProp;
  borderWidth?: StyleProp;
}

export interface StyleProp {
  label?: string;
  description?: string;
  inputType: string;
  value: string;
  defaultValue?: string;
}