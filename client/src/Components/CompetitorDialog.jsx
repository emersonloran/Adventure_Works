import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MenuItem } from "@material-ui/core";

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
  const { dialogOpen, setDialogOpen } = props;

  const [sex, setSex] = React.useState("M");

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  return (
    <div>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Adicionar novo competidor</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Informe abaixo os dados do competidor
          </DialogContentText>
          <TextField autoFocus required label="Nome" fullWidth margin="dense" />
          <TextField
            select
            label="Sexo"
            value={sex}
            onChange={handleChange}
          >
            {sexo.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Temperatura média corporal"
            type="number"
            fullWidth
          />
          <TextField label="Peso" type="number" fullWidth />
          <TextField label="Altura" type="number" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CompetitorDialog;
