var result = 0;
var holder, answer;

var display = document.getElementsByClassName('display')

$(".num").on("click", function() {

	if (result === 0 | result === "0.") 
	{
		result = $(this).text();

		if (result === ".") 
		{
			result = "0."
		}

		$(".display").html(result);
	}
	else 
	{
		holder = $(this).text();
		result = result + holder;
		$(".display").html(result);
	}	
});

$(".sym").on("click", function() {

	if (result === 0 | result === "0.") 
	{
		result = $(this).text();

		if (result === "*" | result === "/" | result === "+" | result === "=")
		{
			result = 0;
		}
		else
		{
			$(".display").html(result);
		}
	}
	else if (result === "*" | result === "/" | result === "+" | result === "=")
	{
		result = 0;
	}
	else 
	{
		holder = $(this).text();
		result = result + holder;
		$(".display").html(result);
	}	
});

$(".clearBtn").on("click", function() {
	result = 0;
	$(".display").html(result);
});

$(".backBtn").on("click", function() {
	result = result.slice(0, -1);
	$(".display").html(result);
});

$(".eq").on("click", function() {
	answer = eval(result);
	$(".display").html(answer);
});