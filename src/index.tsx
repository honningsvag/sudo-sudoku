import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { Card, Content, Grid, Title, Numbers } from "components";
import { GlobalStyles, theme } from "styles";
import { configureStore, unregister } from "core";

const store = configureStore();
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <Content>
        <Title>Sudo Sudoku</Title>
        <Card>
          {" "}
          <Grid />
          <Numbers />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

unregister();
