import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { Button, Grid } from "@material-ui/core";
import TrackDialog from "./TrackDialog";
import api from "../Apis/api";
import { getTracks, deleteTrack } from "../Redux/Actions";
import { connect, useDispatch } from "react-redux";
import TrackDetailsDialog from "./TrackDetailsDialog";

const TracksContent = props => {
  const dispatch = useDispatch();

  const [trackDialogOpen, setTrackDialogOpen] = React.useState(false);

  const [trackDetailsDialogOpen, setTrackDetailsDialogOpen] = React.useState(false);

  const [track, setTrack] = React.useState(false);

  useEffect(async () => {
    try {
      const response = await api.get("/tracks");
      console.log("GET_TRACKS", response);
      dispatch(getTracks(response.data.tracks));
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      dispatch(deleteTrack(id));
      await api.delete(`/track/${id}`);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <React.Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Title>Pistas</Title>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setTrackDialogOpen(true);
            }}
          >
            +
          </Button>
        </Grid>
      </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Deletar</TableCell>
            <TableCell align="right">Detalhes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tracks &&
            props.tracks.map((track) => (
              <TableRow key={track.id}>
                <TableCell>{track.descricao}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    style={{ color: "blue" }}
                    onClick={() => {
                      setTrack(track);
                      setTrackDialogOpen(true);
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
                      handleDelete(track.id);
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
                      setTrack(track);
                      setTrackDetailsDialogOpen(true);
                    }}
                  >
                    Detalhes
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TrackDialog
        dialogOpen={trackDialogOpen}
        setDialogOpen={setTrackDialogOpen}
        track={track}
        setTrack={setTrack}
      />
      <TrackDetailsDialog
        trackDetailsDialogOpen={trackDetailsDialogOpen}
        setTrackDetailsDialogOpen={setTrackDetailsDialogOpen}
        track={track}
        setTrack={setTrack}
      />
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    tracks: state.reducer.tracks,
  };
}

export default connect(mapStateToProps)(TracksContent);
