import { AppContainer } from "./App.styles";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <AppRoutes />
      </AppContainer>
    </>
  );
}

export default App;
