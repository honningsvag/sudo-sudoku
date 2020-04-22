import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";

import { Card, Content, Grid, Title, Numbers, NewButton } from "components";
import { GlobalStyles, theme } from "styles";
import { configureStore, register } from "core";

const { persistor, store } = configureStore();
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Content>
          <Title>Sudo Sudoku</Title>
          <Card>
            <NewButton />
            <Grid />
            <Numbers />
          </Card>
        </Content>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

register();
