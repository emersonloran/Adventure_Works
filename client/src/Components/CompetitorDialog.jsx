import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MenuItem } from "@material-ui/core";
import api from "../Apis/api";
import { postCompetitor } from "../Redux/Actions";
import { useDispatch } from "react-redux";

const sexo = [
  {
    value: "M",
    label: "Masculino",
  },
  {
    value: "F",
    label: "Feminino",
  },
];

const CompetitorDialog = (props) => {
  const { dialogOpen, setDialogOpen, competitor, setCompetitor } = props;

  const dispatch = useDispatch();

  const [sex, setSex] = React.useState("M");
  const [name, setName] = React.useState("");
  const [temperature, setTemperature] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [height, setheight] = React.useState(0);

  const handleSubmit = async e => {
    try {
      const response = await api.post("/competitor", {
        nome: name,
        sexo: sex,
        temperatura_media_corpo: temperature,
        peso: weight,
        altura: height
      })

      dispatch(postCompetitor(response.data.competitor));

      console.log("POST_COMPETITOR", response);
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleUpdate = async e => {
    try {
      const response = await api.put(`/competitor/${competitor.id}`, {
        nome: name,
        sexo: sex,
        temperatura_media_corpo: temperature,
        peso: weight,
        altura: height
      })

      console.log("PUT_COMPETITOR", response);
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleClose = () => {
    setCompetitor(false);
    setDialogOpen(false);
  };

  return (
    <div>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>{competitor ? "Editar competidor" : "Adicionar novo competidor"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {competitor ? "Altere abaixo os dados do competidor" : "Informe abaixo os dados do competidor"}
          </DialogContentText>
          <TextField
            value={name}
            autoFocus
            required
            label="Nome"
            fullWidth
            margin="dense"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            select
            label="Sexo"
            value={sex}
            onChange={(e) => {
              setSex(e.target.value);
            }}
          >
            {sexo.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            value={temperature}
            label="Temperatura média corporal"
            type="number"
            fullWidth
            onChange={(e) => {
              setTemperature(e.target.value);
            }}
          />
          <TextField
            value={weight}
            label="Peso"
            type="number"
            fullWidth
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
          <TextField
            value={height}
            label="Altura"
            type="number"
            fullWidth
            onChange={(e) => {
              setheight(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              competitor ? handleUpdate() : handleSubmit();
              handleClose();
            }}
            color="primary"
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CompetitorDialog;
