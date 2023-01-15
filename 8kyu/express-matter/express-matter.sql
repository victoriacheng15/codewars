-- SELECT /* your query - you are given columns a, b, and c */ AS res FROM expression_matter;

SELECT
  GREATEST(
    a + b + c,
    a * (b + c),
    a * b * c,
    a + b * c,
    (a + b) * c) as res
FROM expression_matter;