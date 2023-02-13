-- # write your SQL statement here: you are given a table 'ntheven' with column 'n', return a table with column 'n' and your result in a column named 'res'.

SELECT n, (n - 1) * 2 AS res FROM ntheven;