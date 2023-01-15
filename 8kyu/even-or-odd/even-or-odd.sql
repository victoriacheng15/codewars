--Write your SQL statement here--

SELECT number, 
CASE
  WHEN number % 2 = 0 THEN "Even"
  ELSe "Odd"
END as is_even
FROM numbers;