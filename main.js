import { Elm } from "./src/Main.elm";

import "./style.css";
import "uno.css";
import "@unocss/reset/tailwind.css";

const root = document.querySelector("#app div");
const app = Elm.Main.init({ node: root });
