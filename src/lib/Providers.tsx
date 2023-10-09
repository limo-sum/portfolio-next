"use client";

import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import muiTheme from "../styles/muiTheme";
import theme from "../styles/theme";
import { observer } from "mobx-react";

const Providers = observer((props: React.PropsWithChildren) => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </MuiThemeProvider>
  );
});

export default Providers;
