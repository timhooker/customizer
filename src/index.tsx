import * as React from "react";
import * as ReactDOM from "react-dom";
import Customizer from "./customizer";
import "./index.css";

ReactDOM.render(
  <Customizer title="customizer" visible={false} />,
  document.getElementById("root") as HTMLElement,
);
