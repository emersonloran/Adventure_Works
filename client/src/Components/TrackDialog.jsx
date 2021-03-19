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
import { postTrack } from "../Redux/Actions";
import { useDispatch } from "react-redux";

const TrackDialog = (props) => {
  const { dialogOpen, setDialogOpen, track, setTrack } = props;

  const dispatch = useDispatch();

  const [descricao, setDescricao] = React.useState("");

  const handleSubmit = async (e) => {
    try {
      const response = await api.post("/track", {
        descricao: descricao,
      });

      dispatch(postTrack(response.data.track));

      console.log("POST_TRACK", response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdate = async (e) => {
    try {
      const response = await api.put(`/track/${track.id}`, {
        descricao: descricao,
      });

      console.log("PUT_TRACK", response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClose = () => {
    setTrack(false);
    setDialogOpen(false);
  };

  return (
    <div>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>
          {track ? "Editar pista" : "Adicionar nova pista"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {track
              ? "Altere abaixo os dados da pista"
              : "Informe abaixo os dados da pista"}
          </DialogContentText>
          <TextField
            value={descricao}
            multiline
            autoFocus
            required
            label="Descrição"
            fullWidth
            margin="dense"
            onChange={(e) => {
              setDescricao(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              track ? handleUpdate() : handleSubmit();
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

export default TrackDialog;
