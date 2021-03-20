import React from "react";
import RunImg from "../assets/img/run_img.jpg";
import Typography from '@material-ui/core/Typography';

const HomeContent = () => {
  return (
    <div>
      <Typography variant="h1" style={{ marginLeft: "20%", marginBottom: "60px" }}>Bem-vindo ao Adventure Works!</Typography>
      <img src={RunImg} alt="Imagem de Corrida" style={{ marginLeft: "25%" }} />
    </div>
  );
};

export default HomeContent;
