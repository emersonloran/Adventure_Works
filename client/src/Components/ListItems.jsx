import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import MapIcon from "@material-ui/icons/Map";
import FlagIcon from "@material-ui/icons/Flag";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router";

const ListItems = () => {
  const history = useHistory();

  const handleListItemClick = (route) => {
    switch (route) {
      case "home":
        history.push("/");
        break;

      case "competitors":
        history.push("/competidores");
        break;

      case "tracks":
        history.push("/pistas");
        break;

      case "races":
        history.push("/corridas");
        break;

      case "statistics":
        history.push("/estatisticas");
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <ListItem
        button
        onClick={() => {
          handleListItemClick("home");
        }}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Início" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          handleListItemClick("competitors");
        }}
      >
        <ListItemIcon>
          <DirectionsRunIcon />
        </ListItemIcon>
        <ListItemText primary="Competidores" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          handleListItemClick("tracks");
        }}
      >
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="Pistas" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          handleListItemClick("races");
        }}
      >
        <ListItemIcon>
          <FlagIcon />
        </ListItemIcon>
        <ListItemText primary="Corridas" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          handleListItemClick("statistics");
        }}
      >
        <ListItemIcon>
          <InsertChartIcon />
        </ListItemIcon>
        <ListItemText primary="Estatísticas" />
      </ListItem>
    </div>
  );
};

export default ListItems;
