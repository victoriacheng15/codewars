-- # write your SQL statement here: you are given a table 'removechar' with column 's', return a table with column 's' and your result in a column named 'res'.

SELECT s, SUBSTR(s, 2, length(s) - 2) AS res
FROM removechar;