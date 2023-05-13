import LandingPage from "pages/landingPage";
import Header from "components/header/header";
import { ThemeProvider } from "@emotion/react";
import ProductPage from "pages/productPage/productPage";

function App() {
    return (
        <div>
        <Header></Header>
        <ProductPage />
        </div>
    )
}

export default App;