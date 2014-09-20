// JavaScript Document

var map;
var california = new google.maps.LatLng(37.558931, -122.286793);
var stavanger=new google.maps.LatLng(58.983991,5.734863);
var amsterdam=new google.maps.LatLng(52.395715,4.888916);
var london = new google.maps.LatLng(53.947444,-1.032692);
var india = new google.maps.LatLng(19.019839,73.016934);
var lake = new google.maps.LatLng(28.776498,-81.357166);
var canada = new google.maps.LatLng(43.551068,-79.583695);
var worldCenter = new google.maps.LatLng(35,0);

/**
 * The HomeControl adds a control to the map that simply
 * returns the user to California. This constructor takes
 * the control DIV as an argument.
 * @constructor
 */
  var infowindow = new google.maps.InfoWindow({
  content:"<h4>The Catalyst</h4>Baird Lane<br />York<br />North Yorkshire<br />YO10 5GA<br />UK<br />"
  });
  
  var infowindow2 = new google.maps.InfoWindow({
  content:"<h4>951 Mariner's Island Blvd</h4>Suite 300<br />San Mateo<br />California<br />94404<br />"
  });
  
  var infowindow3 = new google.maps.InfoWindow({
  content:"<h4>Propalms Technologies Ltd.</h4>13, Ground Floor<br />Olive Complex<br />CHS Ltd. Plot No 44<br />Sector-42<br />Nerul(W)<br />Navi Mumbai<br />400 706<br />"}); 
  
  var infowindow4 = new google.maps.InfoWindow({
  content:"<h4>801 International Parkway</h4>Suite 500<br />Lake Mary<br />FL.<br />32746<br />"}); 
 
  var infowindow5 = new google.maps.InfoWindow({
  content:"<h4>1 Port Street East</h4>Suite 202<br />Mississauga,<br />Ontario<br />L5G 4N1<br />Canada<br />"}); 
 
function YorkControl(controlDiv, map) {

  // Set CSS for the control border
  var controlUI = document.createElement('div');

  controlUI.className  = 'mapcal';
  controlUI.title = 'Click to set the map to About';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.innerHTML = '<b>York,<BR/>UK</b>';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to
  // California
  google.maps.event.addDomListener(controlUI, 'click', function() {
    map.setCenter(london),
	map.setZoom(16),
	infowindow.close(),
	infowindow2.close(),
	infowindow3.close(),
	infowindow4.close(),
	infowindow5.close(),
	marker.setAnimation(null)

  });

}


function CaliforniaControl(controlDiv, map) {

  // Set CSS styles for the DIV containing the control
  // Setting padding to 5 px will offset the control
  // from the edge of the map


  // Set CSS for the control border
  var controlUI = document.createElement('div');
  
  controlUI.className  = 'mapcal';
  controlUI.title = 'Click to set the map to Home';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.innerHTML = '<b>California,<br />US</b>';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to
  // California
  google.maps.event.addDomListener(controlUI, 'click', function() {
    map.setCenter(california),
	map.setZoom(16),
	infowindow.close(),
	infowindow2.close(),
	infowindow3.close(),
	infowindow4.close(),
	infowindow5.close()
  });

}

function IndiaControl(controlDiv, map) {

  // Set CSS styles for the DIV containing the control
  // Setting padding to 5 px will offset the control
  // from the edge of the map


  // Set CSS for the control border
  var controlUI = document.createElement('div');
  
  controlUI.className  = 'mapcal';
  controlUI.title = 'Click to set the map to Home';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.innerHTML = '<b>Mumbai,<BR />INDIA</b>';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to
  // California
  google.maps.event.addDomListener(controlUI, 'click', function() {
    map.setCenter(india),
	map.setZoom(16),
	infowindow.close(),
	infowindow2.close(),
	infowindow3.close(),
	infowindow4.close(),
	infowindow5.close()
  });

}


function LakeControl(controlDiv, map) {

  // Set CSS for the control border
  var controlUI = document.createElement('div');

  controlUI.className  = 'mapcal';
  controlUI.title = 'Click to set the map to About';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.innerHTML = '<b>Florida,<BR/>US</b>';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to
  // California
  google.maps.event.addDomListener(controlUI, 'click', function() {
    map.setCenter(lake),
	map.setZoom(16),
	infowindow.close(),
	infowindow2.close(),
	infowindow3.close(),
	infowindow4.close(),
	infowindow5.close()
  });

}

function CanadaControl(controlDiv, map) {

  // Set CSS for the control border
  var controlUI = document.createElement('div');

  controlUI.className  = 'mapcal';
  controlUI.title = 'Click to set the map to About';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior
  var controlText = document.createElement('div');
  controlText.innerHTML = '<b>Ontario,<BR/>CANADA</b>';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to
  // California
  google.maps.event.addDomListener(controlUI, 'click', function() {
    map.setCenter(canada),
	map.setZoom(16),
	infowindow.close(),
	infowindow2.close(),
	infowindow3.close(),
	infowindow4.close(),
	infowindow5.close()
	
  });

}



function initialize() {
  var mapDiv = document.getElementById('googleMap');
  var mapOptions = {
	center: worldCenter,
	zoom:1,
	disableDefaultUI:true, 
	draggable: false,
	scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(mapDiv, mapOptions);
 

  // California DIV.
  var homeControlDiv = document.createElement('div');
  var homeControl = new CaliforniaControl(homeControlDiv, map);

  homeControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
  
  // York DIV.
  var aboutControlDiv = document.createElement('div');
  var aboutControl = new YorkControl(aboutControlDiv, map);

  aboutControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(aboutControlDiv);
  
  // India DIV.
  var indiaControlDiv = document.createElement('div');
  var indiaControl = new IndiaControl(indiaControlDiv, map);

  indiaControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(indiaControlDiv);
  
  // India DIV.
  var lakeControlDiv = document.createElement('div');
  var lakeControl = new LakeControl(lakeControlDiv, map);

  lakeControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(lakeControlDiv);
  
  // Canada DIV.
  var canadaControlDiv = document.createElement('div');
  var canadaControl = new CanadaControl(canadaControlDiv, map);

  canadaControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(canadaControlDiv);
  
  
  var marker=new google.maps.Marker({
  position:london,
  animation: google.maps.Animation.DROP,
  });
  
  var marker2=new google.maps.Marker({
  position:california,
  animation: google.maps.Animation.DROP,
  });
  
  var marker3=new google.maps.Marker({
  position:india,
  animation: google.maps.Animation.DROP,
  });
  
  var marker4=new google.maps.Marker({
  position:lake,
  animation: google.maps.Animation.DROP,
  });
  
  var marker5=new google.maps.Marker({
  position:canada,
  animation: google.maps.Animation.DROP,
  });
  
  
  



  google.maps.event.addListener(marker,'click',function() {
  map.setZoom(12);
  infowindow.open(map,marker);
  map.setCenter(marker.getPosition());
  });
  
  google.maps.event.addListener(marker2,'click',function() {
  map.setZoom(12);
  infowindow2.open(map,marker2);
  map.setCenter(marker2.getPosition());
 
  });
  
  google.maps.event.addListener(marker3,'click',function() {
  map.setZoom(12);
  infowindow3.open(map,marker3);
  map.setCenter(marker3.getPosition());
  });
  
  google.maps.event.addListener(marker4,'click',function() {
  map.setZoom(12);
  infowindow4.open(map,marker4);
  map.setCenter(marker4.getPosition());
  });
  
  google.maps.event.addListener(marker5,'click',function() {
  map.setZoom(12);
  infowindow5.open(map,marker5);
  map.setCenter(marker5.getPosition());
  });

  marker.setMap(map);
  marker2.setMap(map);
  marker3.setMap(map);
  marker4.setMap(map);
  marker5.setMap(map);
  
  
  var myTrip=[london,india,lake,california,canada,london];
  var flightPath=new google.maps.Polyline({
  path:myTrip,
  strokeColor:"#2177bd",
  strokeOpacity:0.5,
  strokeWeight:2,
  });

  flightPath.setMap(map);
}


google.maps.event.addDomListener(window, 'load', initialize);
