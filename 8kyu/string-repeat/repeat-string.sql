--# write your SQL statement here: you are given a table 'repeatstr' with columns 'n' and 's', return a table with all columns and your result in a column named 'res'.

select n, s, REPEAT(s, n) as res from repeatstr

/* 
MySQL repeat() function

it takes string and number as parameters

REPEAT(string, number)

https://www.w3schools.com/sqL/func_mysql_repeat.asp
*/