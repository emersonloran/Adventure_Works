import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { Button, Grid } from "@material-ui/core";
import CompetitorDialog from "./CompetitorDialog";
import api from "../Apis/api";
import { getCompetitors } from "../Redux/Actions";
import { connect, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({}));

const CompetitorsContent = props => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [ competitorDialogOpen, setCompetitorDialogOpen ] = React.useState(false);

  useEffect(async () => {
    try {
      const response = await api.get("/competitors");
      console.log("GET_COMPETITORS", response);
      dispatch(getCompetitors(response.data.competitors));
    } catch (error) {
      console.error(error.message);
    }
  }, [])

  return (
    <React.Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Title>Competidores</Title>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => {setCompetitorDialogOpen(true)}}>
            +
          </Button>
        </Grid>
      </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Sexo</TableCell>
            <TableCell>Temperatura Média Corporal</TableCell>
            <TableCell>Peso</TableCell>
            <TableCell align="right">Altura</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.competitors && props.competitors.map((competitor) => (
            <TableRow key={competitor.id}>
              <TableCell>{competitor.nome}</TableCell>
              <TableCell>{competitor.sexo}</TableCell>
              <TableCell>{competitor.temperatura_media_corpo}</TableCell>
              <TableCell>{competitor.peso}</TableCell>
              <TableCell align="right">{competitor.altura}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CompetitorDialog dialogOpen={competitorDialogOpen} setDialogOpen={setCompetitorDialogOpen}/>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    competitors: state.reducer.competitors,
  };
}

export default connect(mapStateToProps)(CompetitorsContent);
