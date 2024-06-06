import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const init = (config = {}) => {
  ReactDOM.createRoot(document.querySelector(config.rootSelector)).render(
    <App config={config} />
  );
};

window.sitewrenchApp = {
  init,
};
