DROP DATABASE IF EXISTS backend_challenge;

CREATE DATABASE backend_challenge;

USE backend_challenge;

CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  account_id INT NOT NULL,
  transaction_date DATE NOT NULL,
  amount DECIMAL(10, 2) NOT NULL
);

CREATE VIEW monthly_summary_view as (
  SELECT
    account_id,
    EXTRACT(MONTH FROM transaction_date) as month,
    EXTRACT(YEAR FROM transaction_date) as year,
    SUM(amount) as total_amount
  FROM
    transactions
  GROUP BY
    account_id,
    year,
    month
);

INSERT INTO
  transactions (account_id, transaction_date, amount)
VALUES
  (1, '2022-01-15', 3000.00),
  (1, '2022-01-20', 7000.00),
  (1, '2023-04-01', 1000.00),
  (1, '2023-05-10', 12000.00),
  (1, '2024-08-01', 12000.00),
  (1, '2024-10-10', 8000.00),
  (3, '2022-03-15', 5000.00),
  (3, '2022-03-20', 5000.00),
  (3, '2024-03-15', 9000.00),
  (3, '2024-07-20', 5000.00),
  (3, '2025-01-15', 15000.00),
  (3, '2025-02-20', 12000.00),
  (4, '2022-03-25', 6000.00),
  (4, '2022-03-30', 4000.00),
  (4, '2023-01-25', 11000.00),
  (4, '2023-10-30', 4000.00),
  (4, '2025-01-25', 11000.00),
  (4, '2025-04-30', 40000.00),
  (5, '2024-01-10', 1000.00),
  (5, '2025-02-15', 1000.00);

SELECT
  account_id,
  month,
  year,
  total_amount
FROM
  monthly_summary_view
WHERE
  total_amount > 10000;
