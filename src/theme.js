import { createContext, useContext, useMemo, useState } from "react";

export const tokens = (mode) => ({
  ...(mode == "dark"
    ? {
        grey: {
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
        },
        greenAccent: {
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
        },
        redAccent: {
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
        },
        blueAccent: {
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
        },
      }
    : {
        grey: {
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
        },
        primary: {
          300: "#0c101b",
          400: "#f2f0f0", // manually changed
          500: "#141b2d",
          600: "#1F2A40",
        },
        greenAccent: {
          300: "#222222",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
        },
        redAccent: {
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
        },
        blueAccent: {
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
        },
      }),
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

//
export const UseMode = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const colors = tokens(mode);

  return (
    <ColorModeContext.Provider value={{ colorMode, colors }}>
      {children}
    </ColorModeContext.Provider>
  );
};

const useThemeContext = () => {
  return useContext(ColorModeContext);
};

export default useThemeContext;
