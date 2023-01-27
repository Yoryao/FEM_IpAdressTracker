
console.log("app.js linked");

// chequear metedor 
// isIPv4

let apiKey = "at_d9s0KYVkjwUUVrnuF5GEayVK2Jc0N";

function printIp() {
    let ipValue = document.getElementById("ipInput").value;
   
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${ipValue}`)
        .then((Response) => Response.json())
        .then((data) => {
        let objeto = data;
        let ip = objeto.ip;
        let locationCountry = objeto.location.country; 
        let locationState = objeto.location.region; 
        let isp = objeto.isp;
        let timeZone = objeto.location.timezone;
        console.log("ipValue: " + ipValue)
        
        document.getElementById("ipPrinted").innerText = ip;
        document.getElementById("locationPrinted").innerText = `${locationCountry} , ${locationState}`;
        document.getElementById("timeZonePrinted").innerText =`UTC ${timeZone}`;
        document.getElementById("ispPrinted").innerText = isp;
        
    }
    );
    
    


// impresion en pantalla




}