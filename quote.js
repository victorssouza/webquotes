function getQuote(){
	$.ajax({
		headers:{
			"X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
			Accept: "application/json",
			"Content-Type": "application/x-www-form-urlencoded"	,
			"cache":false,
		},
		url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
		success: function(response){
			var r = JSON.parse(response);
			var quoteText = r.quote;
			var quoteAuthor = r.author;
			document.getElementById("quoteText").innerHTML = quoteText;
			document.getElementById("quoteAuthor").innerHTML = quoteAuthor;
		}
	});
}

function shareTwitter(){
	quoteText = document.getElementById("quoteText").innerHTML;
	quoteAuthor = document.getElementById("quoteAuthor").innerHTML;
	window.open('https://twitter.com/intent/tweet?text="' + quoteText + '" - ' + quoteAuthor,'_blank');

}
