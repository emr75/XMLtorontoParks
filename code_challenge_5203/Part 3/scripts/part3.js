var xml = new XMLHttpRequest();
var xmldocument;
xml.onload = function() {
    xmldocument = xml.responseXML

theDropdown();
document.getElementById("details").onclick = function () {
    showdetails();
    return false;
    }
}

var DropD = document.getElementById("subject");

xml.onerror = function() {
    console.log("Error Loading");
}

xml.open("POST", "xml/toronto-parks3.xml");
xml.responseType = "document";
xml.send();
function theDropdown() {
    var Locations = xmldocument.getElementsByTagName("Location");

    var options = "";
    for (let i=0; i < Locations.length; i++){

        let LocName = Locations[i].getElementsByTagName("LocationName")[0].textContent;
        let LocId = Locations[i].getElementsByTagName("LocationID")[0].textContent;
       // let Locadd = Locations[i].getElementsByTagName("Address")[0].textContent;
        options += "<option value='" + LocId + "'>" + LocName + "</option>";
    }
    
    DropD.innerHTML = options;
}

 




 function showdetails() {
    
    var ParkNameR = document.getElementById("nameresult");
    var FacilityNameR = document.getElementById("displayresult");
    var LocationR = document.getElementById("locationresult");
    
    
   
    var iddd = DropD.value;
    ParkNameR.innerHTML = DropD.options[DropD.selectedIndex].text;

    var theIterate = xmldocument.evaluate("//Location[LocationID="+iddd+"]", xmldocument, null, XPathResult.ANY_TYPE, null);
    while(node = theIterate.iterateNext()){
      
    FacilityNameR.innerHTML = "";
    LocationR.innerHTML = "Location: " + node.querySelector("Address").textContent;
    var FacilityDName = node.querySelectorAll("FacilityDisplayName");
    for (let i=0; i < FacilityDName.length; i++) {     
        FacilityNameR.innerHTML += "<ul><li>" + FacilityDName[i].textContent + "</li></ul>";

    }

return false;



 }
}