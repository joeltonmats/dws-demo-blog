import DebugPostContext from "./pages/debug/DebugPostContext";
import DebugAuthorContext from "./pages/debug/DebugAuthorContext";
import DebugCategoryContext from "./pages/debug/DebugCategoryContext";
import AppRoutes from "./routes/routes";

import "./App.css";

function App() {
  return (
    <>
      <AppRoutes />
      <DebugPostContext />
      <DebugAuthorContext />
      <DebugCategoryContext />
    </>
  );
}

export default App;
