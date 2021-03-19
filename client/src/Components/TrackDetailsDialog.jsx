import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const TrackDetailsDialog = (props) => {
  const {
    trackDetailsDialogOpen,
    setTrackDetailsDialogOpen,
    track,
    setTrack,
  } = props;

  const handleClose = () => {
    setTrack(false);
    setTrackDetailsDialogOpen(false);
  };

  return (
    <div>
      <Dialog
        open={trackDetailsDialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Detalhes da Pista</DialogTitle>
        <DialogContent>
          <DialogContentText>{track.descricao}</DialogContentText>
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

export default TrackDetailsDialog;
