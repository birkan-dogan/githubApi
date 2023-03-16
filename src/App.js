import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  return (
    <div className="app">
      <AppRouter />
      <ToastContainer theme="dark" position="top-center" />
    </div>
  );
}

export default App;
