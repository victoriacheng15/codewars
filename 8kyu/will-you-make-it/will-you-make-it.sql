--# write your SQL statement here: you are given a table 'zerofuel' with columns 'distance_to_pump', 'mpg' and 'fuel_left', return a table with all the columns and your result in a column named 'res'.

SELECT distance_to_pump, mpg, fuel_left,
  CASE
    When distance_to_pump <= mpg * fuel_left THEN true ELSE false
  END AS res
FROM zerofuel;