DECLARE 
@cnt INT = 2 SELECT REPLICATE('0', 3-LEN(@cnt)) + CAST(@cnt AS CHAR)

-- d앞에 0이 두개씩 붙는 식 형식

