import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import { Button, Grid } from "@material-ui/core";
import CompetitorDialog from "./CompetitorDialog";

// Generate Competitors Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const competitors = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

const useStyles = makeStyles((theme) => ({}));

const Competitors = () => {
  const classes = useStyles();

  const [ competitorDialogOpen, setCompetitorDialogOpen ] = React.useState(false);

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
          {competitors.map((competitor) => (
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

export default Competitors;
