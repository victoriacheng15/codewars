-- # write your SQL statement here: you are given a table 'multiplication' with column 'number', return a table with column 'number' and your result in a column named 'res'.

SELECT number,
  CASE
    WHEN mod(number, 2) = 0 THEN number * 8 
    ELSE number * 9
  END AS res
FROM multiplication;