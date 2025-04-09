import { AppContainer } from "./App.styles";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <AppContainer>
        <AppRoutes />
      </AppContainer>
    </>
  );
}

export default App;
