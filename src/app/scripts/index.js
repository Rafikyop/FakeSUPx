import { addSelectedContactChat } from "./setRemoveAriaSelected.js";
import { navigationBackLayout } from "./navigation-back.js";
import { viewportSize } from "./viewport.js";

let imobile = window.matchMedia("(min-width:768px)");
const layoutMain = document.querySelector(".layout-main");

addSelectedContactChat(true);
viewportSize(layoutMain);

imobile.onchange = (event) => {
  console.log(event);
  if (!event.matches) {
    // NOT max-width:768px
    addSelectedContactChat(true);
    navigationBackLayout();
    return true;
  } else {
    // max-width:768px
    addSelectedContactChat();
    return true;
  }
};
