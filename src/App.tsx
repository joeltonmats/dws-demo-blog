import DebugPostContext from "./pages/debug/DebugPostContext";
import DebugAuthorContext from "./pages/debug/DebugAuthorContext";
import DebugCategoryContext from "./pages/debug/DebugCategoryContext";
import AppRoutes from "./routes/routes";

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
