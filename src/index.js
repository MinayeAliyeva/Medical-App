import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "odometer/themes/odometer-theme-default.css";
import $ from "jquery";
import "slick-carousel";
import "./styles/main.scss";
import { normalizeRoute, renderApp } from "./scripts/renderApp";
import { applySeo } from "./scripts/seo";
import { initInteractions } from "./scripts/interactions";

window.$ = $;
window.jQuery = $;

const root = document.getElementById("app");

const renderCurrentRoute = () => {
  const route = normalizeRoute();

  root.innerHTML = renderApp(route);
  applySeo(route);
  initInteractions();
  window.scrollTo(0, 0);
};

if (!window.location.hash) {
  window.location.hash = "#/";
}

window.addEventListener("hashchange", renderCurrentRoute);

renderCurrentRoute();
