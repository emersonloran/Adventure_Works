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
import { getCompetitors, deleteCompetitor } from "../Redux/Actions";
import { connect, useDispatch } from "react-redux";
import CompetitorDetailsDialog from "./CompetitorDetailsDialog";

const useStyles = makeStyles((theme) => ({}));

const CompetitorsContent = (props) => {
  const dispatch = useDispatch();

  const [competitorDialogOpen, setCompetitorDialogOpen] = React.useState(false);

  const [competitorDetailsDialogOpen, setCompetitorDetailsDialogOpen] = React.useState(false);

  const [competitor, setCompetitor] = React.useState(false);

  useEffect(async () => {
    try {
      const response = await api.get("/competitors");
      console.log("GET_COMPETITORS", response);
      dispatch(getCompetitors(response.data.competitors));
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      dispatch(deleteCompetitor(id));
      await api.delete(`/competitor/${id}`);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <React.Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Title>Competidores</Title>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setCompetitorDialogOpen(true);
            }}
          >
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
            <TableCell>Editar</TableCell>
            <TableCell>Deletar</TableCell>
            <TableCell>Detalhes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.competitors &&
            props.competitors.map((competitor) => (
              <TableRow key={competitor.id}>
                <TableCell>{competitor.nome}</TableCell>
                <TableCell>{competitor.sexo}</TableCell>
                <TableCell>{competitor.temperatura_media_corpo}</TableCell>
                <TableCell>{competitor.peso}</TableCell>
                <TableCell align="right">{competitor.altura}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    style={{ color: "blue" }}
                    onClick={() => {
                      setCompetitor(competitor);
                      setCompetitorDialogOpen(true);
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
                      handleDelete(competitor.id);
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
                      setCompetitor(competitor);
                      setCompetitorDetailsDialogOpen(true);
                    }}
                  >
                    Detalhes
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <CompetitorDialog
        dialogOpen={competitorDialogOpen}
        setDialogOpen={setCompetitorDialogOpen}
        competitor={competitor}
        setCompetitor={setCompetitor}
      />
      <CompetitorDetailsDialog
        competitorDetailsDialogOpen={competitorDetailsDialogOpen}
        setCompetitorDetailsDialogOpen={setCompetitorDetailsDialogOpen}
        competitor={competitor}
        setCompetitor={setCompetitor}
      />
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    competitors: state.reducer.competitors,
  };
}

export default connect(mapStateToProps)(CompetitorsContent);
