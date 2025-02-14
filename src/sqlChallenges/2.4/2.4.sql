DROP DATABASE IF EXISTS 2_backend_challenge;

CREATE DATABASE 2_backend_challenge;

USE 2_backend_challenge;

DROP TABLE IF EXISTS customers;

DROP TABLE IF EXISTS orders;

CREATE TABLE customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE RESTRICT
);

CREATE INDEX idx_orders_customer_id ON orders(customer_id);

CREATE INDEX idx_orders_customer_total ON orders(customer_id, total);

INSERT INTO
  customers (name, country)
VALUES
  ('John', 'USA'),
  ('Carl', 'USA'),
  ('Juan', 'Colombia'),
  ('Luna', 'Argentina'),
  ('Camile', 'Brazil');

INSERT INTO
  orders (customer_id, total)
VALUES
  (1, 150.00),
  (1, 200.00),
  (4, 300.50),
  (4, 450.75),
  (5, 100.25);

SELECT
  cs.name as customer_name,
  SUM(os.total) as total_amount_spent
FROM
  customers as cs
JOIN
  orders as os ON cs.id = os.customer_id
WHERE
  cs.id is not null
GROUP BY
  cs.id,
  cs.name
ORDER BY
  total_amount_spent DESC;
