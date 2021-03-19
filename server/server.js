const express = require("express");

const cors = require("cors");

const app = express();

const port = 3001 || 3005;

const db = require("./db/index.js");

app.use(cors());
app.use(express.json());

// GET all competitors
app.get("/competitors", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM competitors");

    res.status(200).json({
      competitors: results.rows,
    });
  } catch (error) {
    console.error(error.message);
  }
});

// GET a competitor
app.get("/competitor/:id", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM competitors WHERE id = $1", [
      req.params.id,
    ]);

    res.status(200).json({
      competitor: results.rows[0],
    });
  } catch (error) {
    console.error(error.message);
  }
});

// POST a competitor
app.post("/competitor", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO competitors (nome, sexo, temperatura_media_corpo, peso, altura) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        req.body.nome,
        req.body.sexo,
        req.body.temperatura_media_corpo,
        req.body.peso,
        req.body.altura,
      ]
    );

    res.status(200).json({
      competitor: results.rows[0],
    });
  } catch (error) {
    console.error(error.message);
  }
});

// PUT a competitor
app.put("/competitor/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE competitors SET nome = $1, sexo = $2, temperatura_media_corpo = $3, peso = $4, altura = $5 WHERE id = $6 RETURNING *",
      [
        req.body.nome,
        req.body.sexo,
        req.body.temperatura_media_corpo,
        req.body.peso,
        req.body.altura,
        req.params.id,
      ]
    );

    res.status(200).json({
      competitor: results.rows[0],
    });
  } catch (error) {
    console.error(error.message);
  }
});

// DELETE a competitor
app.delete("/competitor/:id", (req, res) => {
  try {
    db.query("DELETE FROM racing_history WHERE competitor_id = $1", [req.params.id]);
    db.query("DELETE FROM competitors WHERE id = $1", [req.params.id]);

    res.status(200);

  } catch (error) {
    console.error(error.message);
  }
});

// GET all tracks
app.get("/tracks", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM tracks");

    res.status(200).json({
      tracks: results.rows,
    });
  } catch (error) {
    console.error(error.message);
  }
});

// GET a track
app.get("/track/:id", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM tracks WHERE id = $1", [
      req.params.id,
    ]);

    res.status(200).json({
      track: results.rows[0],
    });
  } catch (error) {
    console.error(error.message);
  }
});

// POST a track
app.post("/track", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO tracks (descricao) VALUES ($1) RETURNING *",
      [req.body.descricao]
    );

    res.status(200).json({
      track: results.rows[0],
    });
  } catch (error) {
    console.error(error.message);
  }
});

// PUT a track
app.put("/track/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE tracks SET descricao = $1 WHERE id = $2 RETURNING *",
      [req.body.descricao, req.params.id]
    );

    res.status(200).json({
      track: results.rows[0],
    });
  } catch (error) {
    console.error(error.message);
  }
});

// DELETE a track
app.delete("/track/:id", (req, res) => {
  try {
    db.query("DELETE FROM tracks WHERE id = $1", [req.params.id]);
    db.query("DELETE FROM racing_history WHERE track_id = $1", [req.params.id]);

    res.status(200);
    
  } catch (error) {
    console.error(error.message);
  }
});

// GET all racing_history
app.get("/races", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM racing_history");

    res.status(200).json({
      races: results.rows,
    });
  } catch (error) {
    console.error(error.message);
  }
});

// GET a racing_history
app.get("/race/:id", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM racing_history WHERE id = $1", [
      req.params.id,
    ]);

    res.status(200).json({
      race: results.rows[0],
    });
  } catch (error) {
    console.error(error.message);
  }
});

// POST a racing_history
app.post("/race", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO racing_history (competitor_id, track_id, data_corrida, tempo_gasto) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        req.body.competitor_id,
        req.body.track_id,
        req.body.data_corrida,
        req.body.tempo_gasto,
      ]
    );

    res.status(200).json({
      race: results.rows[0],
    });
  } catch (error) {
    console.error(error.message);
  }
});

// PUT a racing_history
app.put("/race/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE racing_history SET data_corrida = $1, tempo_gasto = $2 WHERE id = $3 RETURNING *",
      [req.body.data_corrida, req.body.tempo_gasto, req.params.id]
    );

    res.status(200).json({
      race: results.rows[0],
    });
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

// DELETE a racing_history
app.delete("/race/:id", (req, res) => {
  try {
    db.query("DELETE FROM racing_history WHERE id = $1", [req.params.id]);

    res.status(200);
    
  } catch (error) {
    console.error(error.message);
  }
});