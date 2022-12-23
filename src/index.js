import "./custom.css";
import TextBox from "devextreme/ui/text_box";

let container = document.getElementById("app");
let element = document.createElement("div");
container.appendChild(element);
let instance = new TextBox(element, {
  mode: "text",
  placeholder: "Placeholder"
});
