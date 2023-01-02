-- # write your SQL statement here: you are given a table 'paperwork' with columns 'id', n' and 'm', return a table with columns 'n', 'm' and your result in a column named 'res'.

select n, m
  case
  when n < 0 or m < 0 then 0
  else n * m
  end as res
from paperwork