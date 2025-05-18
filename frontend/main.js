var serverurl = "http://127.0.0.1:5000/sharetik"
function copyfunc() {
    var copyText = document.getElementById("outputfield");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  
    alert("Copied the text: " + copyText.value);
  } 
function getoutput(){
    var infield = document.getElementById("infield");
    var outputfield = document.getElementById("outputfield")
    url = `${serverurl}?url=${infield.value}`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    var rjson = JSON.parse(xmlHttp.responseText);
    outputfield.value = rjson["message"];
}
