import React from "react";
import useThemeContext from "../theme";
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";

const NavBar = () => {
  const { colorMode, colors } = useThemeContext();

  return (
    <nav className="navbar">
      <h1 style={{ color: colors.blueAccent[300] }}>Working on Github API</h1>
      <Expand
        duration={750}
        onToggle={() => colorMode.toggleColorMode()}
        className="toggle"
        style={{ color: colors.redAccent[400] }}
      />
    </nav>
  );
};

export default NavBar;
