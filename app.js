var Tbutton = document.querySelector("#btn-translate");
var txtInp = document.querySelector("#txt-input");
var txtOut = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/shakespeare.json";

// error handling if nothing gets back from server
function erorHandler(error) {
    console.log("Error occured on server end!", error)
    alert("this server has limit of 5 requests per hour so if u think u crossed it, try changing your country with a vpn and it will work!")
}

function clickRes() {
    // console.log("button clicked")
    // console.log(txtInp.value);
    // txtOut.innerHTML = txtInp.value;

    var enteredText = txtInp.value; // take input text value
    fetch(serverUrl + "?text=" + enteredText) // added input to server url for fetch
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOut.innerHTML = translatedText
        })
        .catch(erorHandler)


}

Tbutton.addEventListener("click", clickRes)