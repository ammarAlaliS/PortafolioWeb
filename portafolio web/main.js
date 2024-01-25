import Header from "./components/header.js";
import _switch from "./components/switch.js";
import Main from "./components/mainInfo.js";
import NavbarScroll from "./Funtionality/NavbarSkroll.js";
import Works from "./components/WorkSection.js";
import { initializeAnimation } from "./Funtionality/loadElement.js";


window.addEventListener("DOMContentLoaded", () => {
    Header();
    _switch();
    Main();
    NavbarScroll();
    Works();
    initializeAnimation();
});
