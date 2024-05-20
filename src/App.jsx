import React from "react";
import HeaderFooter from "./assets/pages/HeaderFooter";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

const App = () => {
  return (
    <RouterProvider
      router={router}
    />
  );
};

export default App;
