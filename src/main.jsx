import { BrowserRouter } from "react-router-dom";
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import BlogProvider from "./context/BlogContext.jsx";

createRoot(document.getElementById("root")).render(
  <BlogProvider>
    <App />
  </BlogProvider>,
);
