import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import api from "../Apis/api";
import { postRace } from "../Redux/Actions";
import { useDispatch } from "react-redux";

const RaceDialog = (props) => {
  const { dialogOpen, setDialogOpen, race, setRace } = props;

  const dispatch = useDispatch();

  const [competitor, setCompetitor] = React.useState(0);

  const [track, setTrack] = React.useState(0);

  const [date, setDate] = React.useState("");

  const [time, setTime] = React.useState(0);

  const handleSubmit = async (e) => {
    try {
      const response = await api.post("/race", {
        competitor_id: competitor,
        track_id: track,
        data_corrida: date,
        tempo_gasto: time,
      });

      dispatch(postRace(response.data.race));

      console.log("POST_RACE", response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdate = async (e) => {
    try {
      const response = await api.put(`/race/${race.id}`, {
        competitor_id: competitor,
        track_id: track,
        data_corrida: date,
        tempo_gasto: time,
      });

      console.log("PUT_RACE", response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClose = () => {
    setRace(false);
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
          {race ? "Editar corrida" : "Adicionar nova corrida"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {race
              ? "Altere abaixo os dados da corrida"
              : "Informe abaixo os dados da corrida"}
          </DialogContentText>
          <TextField
            value={competitor}
            autoFocus
            required
            label="ID do Competidor"
            fullWidth
            margin="dense"
            onChange={(e) => {
              setCompetitor(e.target.value);
            }}
          />
          <TextField
            value={track}
            required
            label="ID da Pista"
            fullWidth
            margin="dense"
            type="number"
            onChange={(e) => {
              setTrack(e.target.value);
            }}
          />
          <TextField
            value={date}
            required
            fullWidth
            margin="dense"
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <TextField
            value={time}
            required
            label="Tempo gasto"
            fullWidth
            margin="dense"
            type="number"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              race ? handleUpdate() : handleSubmit();
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

export default RaceDialog;
