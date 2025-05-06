var serverurl = "http://127.0.0.1:5000/sharetik"
function copyfunc() {
    // Get the text field
    var copyText = document.getElementById("outputfield");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  } 
function getoutput(){
    var infield = document.getElementById("infield");
    var outputfield = document.getElementById("outputfield")
    url = `${serverurl}?url=${infield.value}`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    var rjson = JSON.parse(xmlHttp.responseText);
    outputfield.value = rjson["message"];
}