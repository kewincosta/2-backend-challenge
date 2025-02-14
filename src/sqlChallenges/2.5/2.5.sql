DROP DATABASE IF EXISTS backend_challenge;

CREATE DATABASE backend_challenge;

USE backend_challenge;

DROP TABLE IF EXISTS sales;

DROP TABLE IF EXISTS products;

DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE RESTRICT
);

CREATE TABLE sales (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT
);

CREATE INDEX idx_products_category ON products(category_id);

CREATE INDEX idx_sales_product ON sales(product_id);

INSERT INTO
  categories (name)
VALUES
  ('Electronics'),
  ('Clothing'),
  ('Furniture');

INSERT INTO
  products (name, category_id)
VALUES
  ('Laptop', 1),
  ('Smartphone', 1),
  ('T-shirt', 2),
  ('Sofa', 3),
  ('Table', 3);

INSERT INTO
  sales (product_id, quantity)
VALUES
  (1, 50),
  (1, 75),
  (2, 120),
  (3, 80),
  (4, 40),
  (5, 70),
  (2, 30),
  (3, 50),
  (5, 50);

SELECT
  cs.name as category_name,
  ps.name as product_name,
  SUM(ss.quantity) as total_quantity_sold
FROM
  categories cs
JOIN
  products ps ON cs.id = ps.category_id
JOIN
  sales ss ON ps.id = ss.product_id
GROUP BY
  cs.name,
  ps.name
HAVING
  total_quantity_sold > 100;
