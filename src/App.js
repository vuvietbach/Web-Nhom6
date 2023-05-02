import LandingPage from "pages/landingPage";
import Header from "components/header/header";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import ProductPage from "pages/productPage/productPage";
const theme = createTheme({
    palette: {
        secondary: {
          main: '#979797',
        },
      },
});
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header></Header>
            <ProductPage />
        </ThemeProvider>

    )
}

export default App;