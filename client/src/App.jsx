import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import Home from "./Routes/Home";
import Competitors from "./Routes/Competitors";
import Tracks from "./Routes/Tracks";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00b400",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/competidores" component={Competitors} />
            <Route exact path="/pistas" component={Tracks} />
            {/* <Route exact path="/competitor/:id/update" component={DialogEditCompetitor} /> */}
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
