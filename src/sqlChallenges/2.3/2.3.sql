DROP DATABASE IF EXISTS 2_backend_challenge;

CREATE DATABASE 2_backend_challenge;

USE 2_backend_challenge;

DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL
);

CREATE INDEX idx_salary ON employees (salary);

INSERT INTO
  employees (name, salary)
VALUES
  ('John', 3887.81),
  ('Carl', 3408.95),
  ('Juan', 4365.54),
  ('Luna', 5708.38),
  ('Camile', 6532.62);

UPDATE
  employees
SET
  salary = salary * 1.10
WHERE
  salary < 5000;
