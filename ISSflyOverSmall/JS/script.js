var map_1 = {"issLat":0,"issLong":0}
var ISSmarkers = [];


function getISS () {
		    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
		        var lat = data['iss_position']['latitude'];
		        var lon = data['iss_position']['longitude'];
		        $('#isslat2').html(Math.round(lat*1000)/1000.0);
		        $('#isslon2').html(Math.round(lon*1000)/1000.0);

		        window.map_1["issLat"]=(Math.round(lat*1000)/1000.0);
		        window.map_1["issLong"]=(Math.round(lon*1000)/1000.0)
		        console.log("ISSmarkers = ",ISSmarkers)

		    });
    	setTimeout(getISS, 3000); 
		}
		getISS();

window.setInterval(function(){
  ISSmarkers.push(map_1);
  marker2A = L.marker([map_1["issLat"], map_1["issLong"]]).addTo(mymap3);
  console.log("marker2A", marker2A._latlng)

}, 5000);


var mymap3 = L.map('mapidC').setView([map_1["issLat"], map_1["issLong"]], 1);

			L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}',
			{
		    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		    maxZoom: 20,
		    level: 18,
		    id: 'jgosses',
		    accessToken: 'pk.eyJ1Ijoiamdvc3NlcyIsImEiOiJjaWk2aWhua2kwMWxidDBrZndhbHBraTd1In0.IIT7dwztvQhH9ZsiOLmnMg'
		}).addTo(mymap3);

