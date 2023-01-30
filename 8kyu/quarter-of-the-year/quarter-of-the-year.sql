-- # write your SQL statement here: you are given a table 'quarterof' with column 'month', return a table with column 'month' and your result in a column named 'res'.

SELECT month, 
       CEIL(month/3.0)::Integer as res
FROM quarterof