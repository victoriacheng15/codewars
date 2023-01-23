--# write your statement here: you will be given a table 'moves' with columns 'position' and 'roll'. return a table with a column 'res'. #--

SELECT position + roll * 2 as res
FROM moves;