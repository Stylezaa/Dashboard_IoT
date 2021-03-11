client = new Paho.MQTT.Client("mqtt.netpie.io", 443, "ac7cf070-1fa8-4902-9c68-b32ab977ffad");//Client_ID
client.onMessageArrived = onMessageArrived;

var options = {
	useSSL: true,
	userName: "FuAYSfZxA9rWFw3UHJbwsXBPBWXfJHiz", //ToKen
	password: "Yx4HSQbur0juCR8Jee0DwnbEd*DkNoK4", //Secret ac7cf070-1fa8-4902-9c68-b32ab977ffad
	onSuccess: onConnect,
	onFailure: doFail,
}

client.connect(options);

function onConnect() {
	client.subscribe("@msg/All");  //Sub data if use "#" all topic u can get
}

function doFail(e) {
	console.log(e);
}


function onMessageArrived(message) {

	const data = JSON.parse(message.payloadString);


	console.log(data);


	var TempGauge = createRadGauge('temperature', -20, 100, ' \xB0C').setVal(data.temperature).setColor(getTempColor(data.temperature));

	// var HumGauge = createRadGauge('humidity', 0, 150, '%').setVal(data.humidity).setColor(getHumColor(data.humidity));

	// //    var Light = createRadGauge('light', 0, 1023, ' ').setVal(data.light).setColor(getLightColor(data.light));

	// var Soil = createRadGauge('soil', 0, 100, '%').setVal(data.soil).setColor(getSoiltColor(data.soil));

	var WiFi = document.getElementById("wifi").innerHTML = data.wifi;

	// var DataH,DataT,DataS;
	// DataH[1] =  data.humidity;
	// 	DataT[1] = data.temperature;
	// 	DataS[1] = data.soil;
	// for (var i = 0; i <= 1; i++){
	// 	DataH[i] =  data.humidity;
	// 	DataT[i] = data.temperature;
	// 	DataS[i] = data.soil; 
	// 	onsole.log(DataH[i]); 
	// }


	var T = new Date();
	Highcharts.chart('container', {
		title: {
			text: '',
		},
		// tooltip: {
		// 	valueSuffix: '°C'
		// },
		chart: {
			type: 'column',
			animation: Highcharts.svg, // don't animate in old IE
			marginRight: 10,
			events: {
				load: function () {
					var chart = this;
					// setInterval(function () {
					// 	chart.series.forEach(function (s) {
					// 		for (var i = 0; i <= 7; i++) {
					// 			//s.addPoint();
					// 		}
					// 	});
					// 	chart.redraw();
					// }, 1000);
				}
			}
		},
		xAxis: {

			//  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 	'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			categories: [T.toLocaleTimeString(),null,null,null,null,T.toLocaleTimeString()]
		},
		yAxis: {
			title: {
				text: 'ຄ່າວັດແທກ'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		series: [
			{ name: 'ຄວາມຊຸ່ມອາກາດ',color: "#2196f3",tooltip: {valueSuffix: '°%'}, data: [data.humidity, data.humidity + 1, data.humidity, data.humidity - 0.4, data.humidity, data.humidity] },
			{ name: 'ອຸນຫະພູມ',color: "#4caf50",tooltip: {valueSuffix: '°C'}, data: [data.temperature, data.temperature, data.temperature + 0.8, data.temperature, data.temperature + 1, data.temperature] },
			{ name: 'ຄວາມຊຸ່ມດິນ',color: "#320d0d",tooltip: {valueSuffix: '%'}, data: [data.soil, data.soil, data.soil, data.soil, data.soil, data.soil] }
		]

	});


}




// App
// function getLightColor(l) {
// 	if (l >= 1000) {
// 		return '#ff5722';
// 	} else if (l >= 900) {
// 		return '#ff9800';
// 	} else if (l >= 700) {
// 		return '#ffc107';
// 	} else if (l >= 500) {
// 		return '#4caf50';
// 	} else if (l > 300) {
// 		return '#8bc34a';
// 	} else if (l >= 200) {
// 		return '#00bcd4';
// 	} else if (l >= 100) {
// 		return '#03a9f4';
// 	} else {
// 		return '#2196f3';
// 	}
// }

function getSoiltColor(S) {
	if (S >= 100) {
		return '#2196f3';
	} else if (S >= 50) {
		return '#03a9f4';
	} else if (S >= 40) {
		return '#00bcd4';
	} else if (S >= 30) {
		return '#8bc34a';
	} else if (S >= 25) {
		return '#4caf50';
	} else if (S >= 10) {
		return '#ffc107';
	} else if (S >= 0) {
		return '#ff9800';
	} else {
		return '#ff5722';
	}
}


function getTempColor(t) {
	if (t >= 35) {
		return '#ff5722';
	} else if (t >= 30) {
		return '#ff9800';
	} else if (t >= 25) {
		return '#ffc107';
	} else if (t >= 18) {
		return '#4caf50';
	} else if (t > 10) {
		return '#8bc34a';
	} else if (t >= 5) {
		return '#00bcd4';
	} else if (t >= -5) {
		return '#03a9f4';
	} else {
		return '#2196f3';
	}
}


function getHumColor(x) {
	if (x >= 35) {
		return '#ff5722';
	} else if (x >= 30) {
		return '#ff9800';
	} else if (x >= 25) {
		return '#ffc107';
	} else if (x >= 18) {
		return '#4caf50';
	} else if (x > 10) {
		return '#8bc34a';
	} else if (x >= 5) {
		return '#00bcd4';
	} else if (x >= -5) {
		return '#03a9f4';
	} else {
		return '#2196f3';
	}
}



function refresh() {
	var xmlHttp = new XMLHttpRequest();

	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == XMLHttpRequest.DONE) {
			if (xmlHttp.status == 200) {
				var data = JSON.parse(xmlHttp.responseText);

				tempGauge.setVal(data.temp).setColor(getTempColor(data.temp));
				humGauge.setVal(data.hum).setColor(getHumColor(data.hum));
			} else {
				console.log('Refresh failed: ' + xmlHttp.status);
			}
		}
	}

	xmlHttp.open("GET", "data", true);
	xmlHttp.send();
}