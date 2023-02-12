--# write your SQL statement here: 
-- you are given a table 'squares' with column 'n' (numer of cubes).
-- return a table with:
--   this column and your result in a column named 'res'

SELECT n, 
  CASE
    WHEN n = 0 THEN 1 ElSE 6 * n * n + 2
  END AS res
FROM squares;