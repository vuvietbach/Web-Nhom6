import LandingPage from "pages/landingPage";
import Header from "components/header";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
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
            <div>
                <Header></Header>
                <LandingPage />
            </div> 
        </ThemeProvider>

    )
}

export default App;