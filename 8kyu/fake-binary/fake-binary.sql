-- # write your SQL statement here: you are given a table 'fakebin' with column 'x', return a table with column 'x' and your result in a column named 'res'.

SELECT x, 
  (SELECT 
    string_agg(
      CASE 
        WHEN substring(x from i for 1) < '5' THEN '0'
        ELSE '1'
      END,
      ''
    )
    FROM generate_series(1, length(x)) i
  ) AS res
FROM fakebin