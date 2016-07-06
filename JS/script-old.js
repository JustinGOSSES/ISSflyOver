//// creating empty variables for map 1 object:
var map_1 = {"issLat":0,"issLong":0}
var ISSmarkers = [];


function getISS () {
		    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
		        var lat = data['iss_position']['latitude'];
		        var lon = data['iss_position']['longitude'];
		        $('#isslat').html(Math.round(lat*1000)/1000.0);
		        $('#isslon').html(Math.round(lon*1000)/1000.0);

		        window.map_1["issLat"]=(Math.round(lat*1000)/1000.0);
		        window.map_1["issLong"]=(Math.round(lon*1000)/1000.0)
		        console.log("ISSmarkers = ",ISSmarkers)

		    });
    	setTimeout(getISS, 3000); 
		}
		getISS();

//// taking open-notify variables for lat and long and making into variables for leaflet.js
///  by changing format slightly.
	// $('#isslat').html(Math.round(lat*1000)/1000.0);
	// $('#isslon').html(Math.round(lon*1000)/1000.0);



//Leaflet.js script
var mymap = L.map('mapid').setView([map_1["issLat"], map_1["issLong"]], 3);

			L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}',
			{
		    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		    maxZoom: 20,
		    level: 20,
		    id: 'jgosses',
		    accessToken: 'pk.eyJ1Ijoiamdvc3NlcyIsImEiOiJjaWk2aWhua2kwMWxidDBrZndhbHBraTd1In0.IIT7dwztvQhH9ZsiOLmnMg'
		}).addTo(mymap);

var marker = L.marker([map_1["issLat"], map_1["issLong"]]).addTo(mymap);


///seoncd map

var mymap2 = L.map('mapidB').setView([map_1["issLat"], map_1["issLong"]], 18);

			L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}',
			{
		    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		    maxZoom: 20,
		    level: 18,
		    id: 'jgosses',
		    accessToken: 'pk.eyJ1Ijoiamdvc3NlcyIsImEiOiJjaWk2aWhua2kwMWxidDBrZndhbHBraTd1In0.IIT7dwztvQhH9ZsiOLmnMg'
		}).addTo(mymap2);

var marker2A = L.marker([map_1["issLat"], map_1["issLong"]]).addTo(mymap2);
/////////////////////////// end leaflet scripts

///timer scripts for updated markers every second

window.setInterval(function(){
  ISSmarkers.push(map_1);
  marker2A = L.marker([map_1["issLat"], map_1["issLong"]]).addTo(mymap3);
  console.log("marker2A", marker2A._latlng)
 //  for (i = 0; i < ISSmarkers.length; i++) { 
	// eval("var mark"+i+"= L.marker(ISSmarkers["+i+"][map_1['issLat']],ISSmarkers["+i+"][map_1['issLong']]).addTo(mymap3);")

 //    // var marker+i = L.marker([map_1["issLat"], map_1["issLong"]]).addTo(mymap3);
	// }
}, 5000);

////////////////////////////////


var mymap3 = L.map('mapidC').setView([map_1["issLat"], map_1["issLong"]], 1);

			L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}',
			{
		    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		    maxZoom: 20,
		    level: 18,
		    id: 'jgosses',
		    accessToken: 'pk.eyJ1Ijoiamdvc3NlcyIsImEiOiJjaWk2aWhua2kwMWxidDBrZndhbHBraTd1In0.IIT7dwztvQhH9ZsiOLmnMg'
		}).addTo(mymap3);

// var marker2Ao = L.marker([map_1["issLat"], map_1["issLong"]]).addTo(mymap3);
// console.log("marker2 original = ",marker2Ao._latlng)

// for (i = 0; i < ISSmarkers.length; i++) { 
// 	eval("var mark"+i+"= L.marker(ISSmarkers["+i+"][map_1['issLat']],ISSmarkers["+i+"][map_1['issLong']]).addTo(mymap3);")

//     // var marker+i = L.marker([map_1["issLat"], map_1["issLong"]]).addTo(mymap3);
// }



