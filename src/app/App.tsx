import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";
import Router from "./router";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
