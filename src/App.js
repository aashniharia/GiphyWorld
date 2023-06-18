import React from "react";
import Footer from "./components/common/footer";
import { CategoryProvider } from "./contexts/CategoryContext";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Header from "./components/common/Header/index";
import { AppContainer, MainContent } from "./AppStyles";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CategoryProvider>
        <AppContainer>
          <Header />
          <MainContent>
            <AppRoutes />
          </MainContent>
          <Footer />
        </AppContainer>
      </CategoryProvider>
    </ThemeProvider>
  );
};

export default App;
