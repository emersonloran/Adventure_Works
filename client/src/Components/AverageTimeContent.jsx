import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { Grid } from "@material-ui/core";
import api from "../Apis/api";
import { getCompetitorsAverageTime } from "../Redux/Actions";
import { connect, useDispatch } from "react-redux";

const AverageTimeContent = (props) => {
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const response = await api.get("/competitors_average_time");
      console.log("GET_COMPETITORS_AVERAGE_TIME", response);
      dispatch(getCompetitorsAverageTime(response.data.competitors_average_time));
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return (
    <React.Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Title>Tempo médio gasto nas corridas</Title>
        </Grid>
      </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nome do competidor</TableCell>
            <TableCell>Tempo médio gasto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.competitors_average_time &&
            props.competitors_average_time.map((competitor_average_time, index) => (
              <TableRow key={index}>
                <TableCell>{competitor_average_time.nome}</TableCell>
                <TableCell>{competitor_average_time.tempo_medio}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    competitors_average_time: state.reducer.competitors_average_time,
  };
}

export default connect(mapStateToProps)(AverageTimeContent);
