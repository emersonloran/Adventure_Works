const express = require("express");

const app = express();

const port = 3001 || 3005;

const db = require("./db/index.js");

app.use(express.json());

// GET all competitors
app.get("/competitors", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM competitors");

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        competitors: results.rows,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
});

// GET a competitor
app.get("/competitor/:id", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM competitors WHERE id = $1", [req.params.id]);

    res.status(200).json({
      status: "success",
      data: {
        competitor: results.rows[0],
      }
    })
  } catch (error) {
    console.error(error.message);
  }
});

// POST a competitor
app.post("/competitor", async (req, res) => {
  try {
    const results = await db.query("INSERT INTO competitors (nome, sexo, temperatura_media_corpo, peso, altura) VALUES ($1, $2, $3, $4, $5) RETURNING *", [req.body.nome, req.body.sexo, req.body.temperatura_media_corpo, req.body.peso, req.body.altura])

    res.status(200).json({
      status: "success",
      data: {
        competitor: results.rows[0],
      }
    })
  } catch (error) {
    console.error(error.message)
  }
});

// PUT a competitor
app.put("/competitor/:id", async (req, res) => {
  try {
    const results = await db.query("UPDATE competitors SET nome = $1, sexo = $2, temperatura_media_corpo = $3, peso = $4, altura = $5 WHERE id = $6 RETURNING *", [req.body.nome, req.body.sexo, req.body.temperatura_media_corpo, req.body.peso, req.body.altura, req.params.id])

    res.status(200).json({
      status: "success",
      data: {
        competitor: results.rows[0],
      }
    })
  } catch (error) {
    console.error(error.message)
  }
});

// DELETE a competitor
app.delete("/competitor/:id", (req, res) => {
  try {
    db.query("DELETE FROM competitors WHERE id = $1", [req.params.id])

    res.status(200).json({
      status: "success",
    })
  } catch (error) {
    console.error(error.message)
  }
});

// GET all tracks
app.get("/tracks", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM tracks");

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        tracks: results.rows,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
});

// GET a track
app.get("/track/:id", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM tracks WHERE id = $1", [req.params.id]);

    res.status(200).json({
      status: "success",
      data: {
        track: results.rows[0],
      }
    })
  } catch (error) {
    console.error(error.message);
  }
});

// POST a competitor
app.post("/track", async (req, res) => {
  try {
    const results = await db.query("INSERT INTO tracks (descricao) VALUES ($1) RETURNING *", [req.body.descricao])

    res.status(200).json({
      status: "success",
      data: {
        track: results.rows[0],
      }
    })
  } catch (error) {
    console.error(error.message)
  }
});

// PUT a track
app.put("/track/:id", async (req, res) => {
  try {
    const results = await db.query("UPDATE tracks SET descricao = $1 WHERE id = $2 RETURNING *", [req.body.descricao, req.params.id])

    res.status(200).json({
      status: "success",
      data: {
        track: results.rows[0],
      }
    })
  } catch (error) {
    console.error(error.message)
  }
});

// DELETE a track
app.delete("/track/:id", (req, res) => {
  try {
    db.query("DELETE FROM tracks WHERE id = $1", [req.params.id])

    res.status(200).json({
      status: "success",
    })
  } catch (error) {
    console.error(error.message)
  }
});

// POST a racing history
app.post("/racing_history", async (req, res) => {
  try {
    const results = await db.query("INSERT INTO racing_history (competitor_id, track_id, data_corrida, tempo_gasto) VALUES ($1, $2, $3, $4) RETURNING *", [req.body.competitor_id, req.body.track_id, req.body.data_corrida, req.body.tempo_gasto])

    res.status(200).json({
      status: "success",
      data: {
        racing_history: results.rows[0],
      }
    })
  } catch (error) {
    console.error(error.message)
  }
});

// PUT a racing history
app.put("/racing_history/:id", async (req, res) => {
  try {
    const results = await db.query("UPDATE racing_history SET data_corrida = $1, tempo_gasto = $2 WHERE id = $3 RETURNING *", [req.body.data_corrida, req.body.tempo_gasto, req.params.id])

    res.status(200).json({
      status: "success",
      data: {
        racing_history: results.rows[0],
      }
    })
  } catch (error) {
    console.error(error.message)
  }
});

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
