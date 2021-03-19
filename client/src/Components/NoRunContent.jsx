import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { Grid } from "@material-ui/core";
import api from "../Apis/api";
import { getCompetitorsNoRun } from "../Redux/Actions";
import { connect, useDispatch } from "react-redux";

const NoRunContent = (props) => {
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const response = await api.get("/competitors_no_run");
      console.log("GET_COMPETITORS_NO_RUN", response);
      dispatch(getCompetitorsNoRun(response.data.competitors_no_run));
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  return (
    <React.Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Title>Competidores que ainda não fizeram nenhuma corrida</Title>
        </Grid>
      </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.competitors_no_run &&
            props.competitors_no_run.map((competitor_no_run) => (
              <TableRow key={competitor_no_run.id}>
                <TableCell>{competitor_no_run.id}</TableCell>
                <TableCell>{competitor_no_run.nome}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    competitors_no_run: state.reducer.competitors_no_run,
  };
}

export default connect(mapStateToProps)(NoRunContent);
