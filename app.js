var currency_converter_endpoint = "http://data.fixer.io/api/latest?access_key=7096227d08beef4d32e58f6a442119de";

$.get(currency_converter_endpoint, (response)=>{
        console.log(response);
    let converted;


	$(".currencyType").click((e)=> {
	    let converted = $("#convertThis").val() * response.rates[e.target.value];
		console.log(converted);
		$("#output_amount").text(converted.toFixed(2));
		$("#output_currency").text(e.target.value);
	});


		

	// $("#usd").click( function() {
	// 	console.log("USD button is clicked");
	// 	converted = $("#convertThis").val() * response.rates.USD;
	// 	console.log(converted);
	// })
	// $("#gbp").click( function() {
	// 	console.log("GBP button is clicked");
	// 	converted = $("#convertThis").val() * response.rates.GBP;
	// 	console.log(converted);
	// })	
	// $("#cny").click( function() {
	// 	console.log("CNY button is clicked");
	// 	converted = $("#convertThis").val() * response.rates.CNY;
	// 	console.log(converted);
	// })
	// $("#jpy").click( function() {
	// 	console.log("JPY button is clicked");
	// 	converted = $("#convertThis").val() * response.rates.JPY;
	// 	console.log(converted);
	// })
	// $("#cad").click( function() {
	// 	console.log("CAD button is clicked");
	// 	converted = $("#convertThis").val() * response.rates.CAD;
	// 	console.log(converted);
	// })
	// $("#output_amount").text(converted);
	// // $("#output_currency").text()

	
})



// function convertCurrency(event) {
//   if ('type' in event.target && event.target.type === 'button') {
//     console.log('handle currency conversion here');
//   }
// }

// document.body.addEventListener('click', convertCurrency);



// $("#usd").click( function() {
// 	console.log("USD button is clicked");
// 	let converted = $("#convertThis").val() * response.rates.USD;
// 	console.log(converted);
// })

// $("#usd").click( function convertCurrency (e) {
// 	let converted = $("$convertThis").val() * response.rates[e.target.value];
// });









