import { AppRoutes } from "./Routes";
import { ThemeProvider } from "./pages/Cap5/context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
