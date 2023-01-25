-- you will be given a table 'kata' with columns 'n', 'x', and 'y'. Return the 'id' and your result in a column named 'res'.
SELECT id, 
  CASE
    WHEN MOD(n, x) = 0 AND MOD(n, y) = 0 THEN true
    ELSE false
  END AS res
FROM kata