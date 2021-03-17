CREATE DATABASE adventure_works;

\c adventure_works;

CREATE TABLE competitors (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    sexo CHAR(1) NOT NULL,
    temperatura_media_corpo DECIMAL NOT NULL,
    peso DECIMAL NOT NULL,
    altura DECIMAL NOT NULL
);

INSERT INTO competitors (nome, sexo, temperatura_media_corpo, peso, altura) VALUES (
    'Geromel Ferreira',
    'M',
    34,
    70,
    1.80
);

CREATE TABLE tracks (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL
);

INSERT INTO tracks (descricao) VALUES (
    'Pista de grande distancia'
);

CREATE TABLE racing_history (
    id SERIAL PRIMARY KEY,
    competitor_id INTEGER NOT NULL,
    track_id INTEGER NOT NULL,
    data_corrida DATE NOT NULL,
    tempo_gasto DECIMAL NOT NULL,
    FOREIGN KEY(competitor_id) REFERENCES competitors(id),
    FOREIGN KEY(track_id) REFERENCES tracks(id)
);

INSERT INTO racing_history (competitor_id, track_id, data_corrida, tempo_gasto) VALUES (
    1,
    1,
    '2021-03-17',
    120
);




-- SELECT * FROM racing_history AS r INNER JOIN competitors AS c ON r.competitor_id = c.id;