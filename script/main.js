var quoteText = document.querySelector(".quote"),
quoteAtuthor = document.querySelector(".atuthor")
getQuoBtn = document.getElementById("getQuoBtn");

// defining the function
function randomQuote(){
    // facehing the quote api 
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
      
    // executing quote and atuthor to paragraph 
        quoteText.innerText = result.content;
        quoteAtuthor.innerText = "_"+result.author;
    });
}

// event listener to button 
getQuoBtn.addEventListener("click", randomQuote);
window.addEventListener("load", randomQuote);
