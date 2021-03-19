import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const raceDetailsDialog = (props) => {
  const {
    raceDetailsDialogOpen,
    setRaceDetailsDialogOpen,
    race,
    setRace,
  } = props;

  const handleClose = () => {
    setRace(false);
    setRaceDetailsDialogOpen(false);
  };

  return (
    <div>
      <Dialog
        open={raceDetailsDialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Dados da Corrida</DialogTitle>
        <DialogContent>
          <DialogContentText>{"ID do Competidor: " + race.competitor_id}</DialogContentText>
          <DialogContentText>{"ID da Pista " + race.track_id}</DialogContentText>
          <DialogContentText>{"Data: " + race.data_corrida}</DialogContentText>
          <DialogContentText>{"Tempo: " + race.tempo_gasto}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default raceDetailsDialog;
