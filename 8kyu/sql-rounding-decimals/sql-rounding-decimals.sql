-- Return a table with two columns (number1, number2), the value in number1 should be rounded down and the value in number2 should be rounded up.

SELECT 
    FLOOR(number1) AS number1, 
    CEILING(number2) AS number2
FROM decimals;