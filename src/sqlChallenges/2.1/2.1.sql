DROP DATABASE IF EXISTS 2_backend_challenge;

CREATE DATABASE 2_backend_challenge;

USE 2_backend_challenge;

DROP TABLE IF EXISTS sales;

CREATE TABLE sales (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

CREATE INDEX idx_product ON sales (product);

INSERT INTO
  sales (product, quantity, price)
VALUES
  ('Product A', FLOOR(1 + (RAND() * 10)), ROUND(10 + (RAND() * 100), 2)),
  ('Product A', FLOOR(1 + (RAND() * 10)), ROUND(10 + (RAND() * 100), 2)),
  ('Product B', FLOOR(1 + (RAND() * 10)), ROUND(10 + (RAND() * 100), 2)),
  ('Product B', FLOOR(1 + (RAND() * 10)), ROUND(10 + (RAND() * 100), 2)),
  ('Product C', FLOOR(1 + (RAND() * 10)), ROUND(10 + (RAND() * 100), 2)),
  ('Product D', FLOOR(1 + (RAND() * 10)), ROUND(10 + (RAND() * 100), 2)),
  ('Product D', FLOOR(1 + (RAND() * 10)), ROUND(10 + (RAND() * 100), 2)),
  ('Product E', FLOOR(1 + (RAND() * 10)), ROUND(10 + (RAND() * 100), 2));

SELECT
	product,
	SUM(quantity * price) as total_revenue
FROM
  sales
GROUP BY
  product
ORDER BY
  total_revenue DESC;
