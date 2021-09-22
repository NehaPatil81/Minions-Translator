var btnTranslate = document.querySelector("#btnTranslate");
var inputtxt=document.getElementById("input-txt");
var output=document.getElementById("output");

//var serverURL="https://api.funtranslations.com/translate/minion.json";
var serverURL="https://api.funtranslations.com/translate/shakespeare.json";
 
function getTranslateURL(text){
 return serverURL+ "?" + "text=" +text;
}

btnTranslate.addEventListener("click",  ()=>{
  var textinput=inputtxt.value;
 
fetch(getTranslateURL(textinput))
.then(response => response.json())
.then(json =>{output.innerText=json.contents.translated})
.catch(error =>console.log(error));
});

