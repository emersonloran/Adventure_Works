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
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExploreIcon from '@material-ui/icons/Explore';
import TimerIcon from '@material-ui/icons/Timer';
import ErrorIcon from '@material-ui/icons/Error';
import { Collapse } from "@material-ui/core";

const ListItems = () => {
  const history = useHistory();

  const [openRegister, setOpenRegister] = React.useState(false);

  const handleOpenRegister = () => {
    setOpenRegister(!openRegister);
  };

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

      case "used_tracks":
        history.push("/pistas_utilizadas");
        break;

      case "average_time":
        history.push("/tempo_medio");
        break;

      case "no_run":
        history.push("/sem_corrida");
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
      <ListItem button onClick={handleOpenRegister}>
        <ListItemIcon>
          <InsertChartIcon />
        </ListItemIcon>
        <ListItemText primary="Estatísticas" />
        {openRegister ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openRegister} timeout="auto" unmountOnExit>
        <ListItem
          button
          onClick={() => {
            handleListItemClick("used_tracks");
          }}
        >
          <ListItemIcon>
            <ExploreIcon />
          </ListItemIcon>
          <ListItemText primary="Pistas Utilizadas" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            handleListItemClick("average_time");
          }}
        >
          <ListItemIcon>
            <TimerIcon />
          </ListItemIcon>
          <ListItemText primary="Tempo Médio" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            handleListItemClick("no_run");
          }}
        >
          <ListItemIcon>
            <ErrorIcon />
          </ListItemIcon>
          <ListItemText primary="Sem corridas" />
        </ListItem>
      </Collapse>
    </div>
  );
};

export default ListItems;
