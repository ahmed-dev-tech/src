//import * as myModule from './fetch'
const log = console.log;
var symbol=window.location.href;
        console.log(symbol);
        symbol=symbol.slice(32);
const chartProperties = {
  width:1100,
  height:600,
  timeScale:{
    timeVisible:true,
    secondsVisible:false,
  }
}
if (symbol=='btc') {
  const domElement = document.getElementById('tvchart');
  const chart = LightweightCharts.createChart(domElement,chartProperties);
  const candleSeries = chart.addCandlestickSeries();
  //get coin.name from index_working_version.html and placed it after symbol in blow link
  fetch(`http://127.0.0.1:9665/fetchAPI?endpoint=https://api.binance.com/api/v3/klines?symbol=${symbol.toUpperCase()}USDT&interval=1m&limit=1000`)
    .then(res => res.json())
    .then(data => {
      const cdata = data.map(d => {
        return {time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
      });
      candleSeries.setData(cdata);
    })
    .catch(err => log(err))

  //Dynamic Chart
  const socket = io.connect('http://127.0.0.1:4000/');

  socket.on('KLINE',(pl)=>{
    //log(pl);
    candleSeries.update(pl);
  });  
}
else{
  const domElement = document.getElementById('tvchart');
  const chart = LightweightCharts.createChart(domElement,chartProperties);
  const candleSeries = chart.addCandlestickSeries();
  //get coin.name from index_working_version.html and placed it after symbol in blow link
  fetch(`http://127.0.0.1:9665/fetchAPI?endpoint=https://api.binance.com/api/v3/klines?symbol=${symbol.toUpperCase()}USDT&interval=1m&limit=1000`)
    .then(res => res.json())
    .then(data => {
      const cdata = data.map(d => {
        return {time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
      });
      candleSeries.setData(cdata);
    })
    .catch(err => log(err))
}
//${symbol.toUpperCase()}

// fetch(`http://127.0.0.1:9665/fetchAPI?endpoint=https://api.binance.com/api/v3/klines?symbol=${symbol.toUpperCase()}USDT&interval=1d&limit=1000`)
//   .then(res => res.json())
//   .then(data => {
//     const cdata = data.map(d => {
//       return {time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[2]),low:parseFloat(d[3]),close:parseFloat(d[4])}
//     });
//     candleSeries.setData(cdata);
//   })
//   .catch(err => log(err))//Dynamic Chart
//   const socket = io.connect('http://127.0.0.1:4000/');
  
//   socket.on('KLINE',(pl)=>{
//     log(pl);
//     candleSeries.update(pl);
//   });
  