DROP DATABASE IF EXISTS 2_backend_challenge;

CREATE DATABASE 2_backend_challenge;

USE 2_backend_challenge;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE INDEX idx_email ON users (email);

INSERT INTO
  users (email, name)
VALUES
  ('user_1@b2rise.com', 'Goji AKA Metadinha'),
  ('user_1@b2rise.com', 'Sukuna AKA Sacana'),
  ('user_2@b2rise.com', 'Frieren AKA A patroa é braba'),
  ('user_3@b2rise.com', 'Hibino AKA Ajuda o maluco que tá doente');

SELECT
  email,
  COUNT(id) as occurrences
FROM
  users
GROUP BY
  email
HAVING
  occurrences > 1;
