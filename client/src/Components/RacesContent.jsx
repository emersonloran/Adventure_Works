import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { Button, Grid } from "@material-ui/core";
import RaceDialog from "./RaceDialog";
import api from "../Apis/api";
import { getRaces, deleteRace } from "../Redux/Actions";
import { connect, useDispatch } from "react-redux";
import RaceDetailsDialog from "./RaceDetailsDialog";

const RacesContent = (props) => {
  const dispatch = useDispatch();

  const [racesDialogOpen, setRacesDialogOpen] = React.useState(false);

  const [raceDetailsDialogOpen, setRaceDetailsDialogOpen] = React.useState(false);

  const [race, setRace] = React.useState(false);

  useEffect(async () => {
    try {
      const response = await api.get("/races");
      console.log("GET_RACES", response);
      dispatch(getRaces(response.data.races));
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      dispatch(deleteRace(id));
      await api.delete(`/race/${id}`);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <React.Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Title>Corridas</Title>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setRacesDialogOpen(true);
            }}
          >
            +
          </Button>
        </Grid>
      </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Competidor</TableCell>
            <TableCell>Pista</TableCell>
            <TableCell>Data</TableCell>
            <TableCell>Tempo</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Deletar</TableCell>
            <TableCell align="right">Detalhes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.races &&
            props.races.map((race) => (
              <TableRow key={race.id}>
                <TableCell>{race.competitor_id}</TableCell>
                <TableCell>{race.track_id}</TableCell>
                <TableCell>{race.data_corrida}</TableCell>
                <TableCell>{race.tempo_gasto}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    style={{ color: "blue" }}
                    onClick={() => {
                      setRace(race);
                      setRacesDialogOpen(true);
                    }}
                  >
                    Editar
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    style={{ color: "red" }}
                    onClick={() => {
                      handleDelete(race.id);
                    }}
                  >
                    Deletar
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    style={{ color: "green" }}
                    onClick={() => {
                      setRace(race);
                      setRaceDetailsDialogOpen(true);
                    }}
                  >
                    Detalhes
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <RaceDialog
        dialogOpen={racesDialogOpen}
        setDialogOpen={setRacesDialogOpen}
        race={race}
        setRace={setRace}
      />
      <RaceDetailsDialog
        raceDetailsDialogOpen={raceDetailsDialogOpen}
        setRaceDetailsDialogOpen={setRaceDetailsDialogOpen}
        race={race}
        setRace={setRace}
      />
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    races: state.reducer.races,
  };
}

export default connect(mapStateToProps)(RacesContent);
