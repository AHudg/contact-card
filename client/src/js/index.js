// Import modules
import "./form";
import "./submit";

// Import CSS
import { Tooltip, Toast, Popover } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";

// Import images
import Logo from "../images/logo.png";
import Bear from "../images/bear.png";
import Dog from "../images/dog.png";

window.addEventListener("load", function () {
  this.document.getElementById("logo").src = Logo;
  this.document.getElementById("bearThumbnail").src = Bear;
  this.document.getElementById("dogThumbnail").src = Dog;
});
