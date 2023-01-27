console.log("app.js linked");
//api user validation
let apiKey = "at_d9s0KYVkjwUUVrnuF5GEayVK2Jc0N";



function getIp() {
    let ipValue = document.getElementById("ipInput").value;

    if (ipValue == "") {  console.log("Error") } else {

    fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipValue}`)
        .then((Response) => Response.json())
        .then((data) => {
        let objeto = data;

        printIp(objeto);
        
            }
        ); 

    }
}

function printIp(objeto) {

    let ip = objeto.ip;
    let locationCountry = objeto.location.country; 
    let locationState = objeto.location.region; 
    let isp = objeto.isp;
    let timeZone = objeto.location.timezone;
    //console.log("ipValue: " + ipValue)
    
    document.getElementById("ipPrinted").innerText = ip;
    document.getElementById("locationPrinted").innerText = `${locationCountry} , ${locationState}`;
    document.getElementById("timeZonePrinted").innerText =`UTC ${timeZone}`;
    document.getElementById("ispPrinted").innerText = isp;

}

