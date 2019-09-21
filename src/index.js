import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./Form";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Form />, document.getElementById("root"));

serviceWorker.unregister();
