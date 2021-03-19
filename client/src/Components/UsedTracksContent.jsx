import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { Grid } from "@material-ui/core";
import api from "../Apis/api";
import { getUsedTracks } from "../Redux/Actions";
import { connect, useDispatch } from "react-redux";

const UsedTracksContent = props => {
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const response = await api.get("/used_tracks");
      console.log("GET_USED_TRACKS", response);
      dispatch(getUsedTracks(response.data.used_tracks));
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return (
    <React.Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Title>Pistas já utilizadas</Title>
        </Grid>
      </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Pista</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.used_tracks &&
            props.used_tracks.map((used_track) => (
              <TableRow key={used_track.id}>
                <TableCell>{used_track.descricao}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    used_tracks: state.reducer.used_tracks,
  };
}

export default connect(mapStateToProps)(UsedTracksContent);
