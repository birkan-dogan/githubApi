import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.scss";
import useThemeContext from "./theme";

function App() {
  const { colors } = useThemeContext();

  return (
    <div
      className="app"
      style={{
        background: colors.primary[400],
        color: colors.greenAccent[300],
      }}
    >
      <AppRouter />
      <ToastContainer theme="dark" position="top-center" />
    </div>
  );
}

export default App;
