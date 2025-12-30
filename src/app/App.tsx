import { ThemeProvider } from "styled-components"
import { lightTheme } from "@/styles/theme"
import GlobalStyle from "@/styles/GlobalStyle"
import Layout from "@/layout/Layout"

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  )
}

export default App
