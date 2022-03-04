var val='';
var baseUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
//var apiKey = "B6D06B73-C222-440D-8510-DE48192D5CC6";

var apiUrl = `${baseUrl}`;
console.log(apiUrl);

fetch(`${baseUrl}`, { 
    method: 'GET',
    headers: {
    //'Content-Type': 'application/json',
    //'X-CoinAPI-Key': `${apiKey}`,
    //'Access-Control-Allow-Origin': "*"
    'accept': 'application/json'
}
}).then((response) => {
    if(response.ok){
        response.json().then((json)=>{
            console.log(json)

            let coinsData = json;

            if(json.length > 0 ){
                var cryptoCoins = "";
            }

            //for loop starts
            
            coinsData.forEach((coins) => {
            cryptoCoins += "<tr>";
            cryptoCoins += `<td> ${coins.id} </td>`;
            cryptoCoins += `<td id="i"> ${coins.name} </td>`;
            cryptoCoins += `<td> ${coins.current_price}</td>`;"<tr>";
            cryptoCoins += `<td> ${coins.market_cap}</td>`;"<tr>";
            cryptoCoins += `<td> ${coins.market_cap_change_24h}</td>`;"<tr>";
            cryptoCoins += `<td><a href="./test.html?${coins.symbol}" style="user-select: auto;"><img class="" width="135" height="50" alt="${coins.id} (${coins.symbol}) 7d chart" data-src="https://www.coingecko.com/coins/${coins.market_cap_rank}/sparkline" data-srcset="https://www.coingecko.com/coins/${coins.market_cap_rank}/sparkline 1x" src="https://www.coingecko.com/coins/${coins.market_cap_rank}/sparkline" srcset="https://www.coingecko.com/coins/${coins.market_cap_rank}/sparkline 1x"></a> </td>`;"<tr>";
        })
            document.getElementById("data").innerHTML = cryptoCoins;
        })
    }
    }).catch((error) => {
        console.log(error);
    });
    function myFunction() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("token-name-address-input");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
    
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            } else {
            tr[i].style.display = "none";
            }
        }
        }
    }