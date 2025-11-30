var sourceLang = 'en';

var text = "";

 window.onload = function() {
    text = document.getElementById("email_body").innerText;
    subject = document.getElementById("emailSubject").innerText;
  
 }

 

function translate_click(value) {
  console.log("Button clicked");
  





const API_KEY = 'AIzaSyB33LmcgJp_Nj_TAOOpjdW8atRF5qXLaaI'
  console.log("Selected language:", value);
const targetLang = value; // Spanish

// Construct the URL for the API request
const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=${sourceLang}&target=${targetLang}&q=${text}`;
const url2 = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=${sourceLang}&target=${targetLang}&q=${subject}`;
// Use the fetch API to make the request
fetch(url)
  .then(response => response.json())
  .then(data => {
    var translatedText = data.data.translations[0].translatedText;
    translatedText = decodeURIComponent(translatedText);
    console.log(translatedText); 
    

   
  document.getElementById("translated_email_body").innerText = translatedText;
  
  })

  fetch(url2)
  .then(response => response.json())
  .then(data => {
    var translatedSubject = data.data.translations[0].translatedText;
    translatedSubject = decodeURIComponent(translatedSubject);
    console.log(translatedSubject); 
    

    
  document.getElementById("emailSubjectTranslated").innerText = translatedSubject;
  
  })
  
  .catch(error => console.error('Error:', error));
  document.getElementById("emailHeaderTranslated").innerText = "Translated Email";
  document.getElementById("toTranslated").innerText = "To: Girija Sivasubramanian";
  document.getElementById("fromTranslated").innerText = "From: Vishak Saravana Kumar";
  document.getElementById("dateTranslated").innerText = "Date: April 27, 2024";
 
  sourceLang = targetLang;
}