import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const CompetitorDetailsDialog = (props) => {
  const {
    competitorDetailsDialogOpen,
    setCompetitorDetailsDialogOpen,
    competitor,
    setCompetitor,
  } = props;

  const handleClose = () => {
    setCompetitor(false);
    setCompetitorDetailsDialogOpen(false);
  };

  return (
    <div>
      <Dialog
        open={competitorDetailsDialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>{competitor.nome}</DialogTitle>
        <DialogContent>
          <DialogContentText>Dados do competidor:</DialogContentText>
          <DialogContentText>{"Sexo: " + competitor.sexo}</DialogContentText>
          <DialogContentText>{"Temperatura média corporal: " + competitor.temperatura_media_corpo}</DialogContentText>
          <DialogContentText>{"Peso: " + competitor.peso}</DialogContentText>
          <DialogContentText>{"Altura: " + competitor.altura}</DialogContentText>
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

export default CompetitorDetailsDialog;
