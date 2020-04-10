import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { Card, Content, Grid, Title } from "./components";
import { GlobalStyles, theme } from "./styles";
import { unregister } from "./core";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content>
      <Title>Sudo Sudoku</Title>
      <Card> <Grid /></Card>
    </Content>
  </ThemeProvider>,
  document.getElementById("root")
);

unregister();
