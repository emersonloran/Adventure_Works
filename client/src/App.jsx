import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import Home from "./Routes/Home";
import Competitors from "./Routes/Competitors";
import Tracks from "./Routes/Tracks";
import Races from "./Routes/Races";
import UsedTracks from "./Routes/UsedTracks";
import AverageTime from "./Routes/AverageTime";

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
            <Route exact path="/corridas" component={Races} />
            <Route exact path="/pistas_utilizadas" component={UsedTracks} />
            <Route exact path="/tempo_medio" component={AverageTime} />
            {/* <Route exact path="/sem_corrida" component={NoRun} /> */}
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
