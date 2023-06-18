import Header from "components/header/header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const { useState } = require("react");
export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <div style={{ height: "25px" }}></div>
      <div class="content-container">{children}</div>
    </div>
  );
};
