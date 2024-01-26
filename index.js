const charVal= document.getElementById("textarea");
let totalCount=document.getElementById("total-counter");
let remainingCount=document.getElementById("remaining-counter");

let char=0;

const updateCounter=() =>{
    userchar= charVal.value.length;
   totalCount.innerText=userchar;
   remainingCount.innerText=150-userchar;
}

charVal.addEventListener("keyup",()=>updateCounter());



const checkGrammar = () => {
    let text = charVal.value;
    let apiUrl = 'https://api.languagetoolplus.com/v2/check';
    let data = {
        text: text,
        language: 'en-US'
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body: new URLSearchParams(data)
    })
    .then(response => response.json())
    .then(data => {
        // Process the response data
        console.log(data);
        displayCorrections(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

const displayCorrections = (data) => {
    // You can process and display the corrections as needed
    // This is a basic implementation
    if (data.matches && data.matches.length > 0) {
        let message = "Corrections:\n";
        data.matches.forEach(match => {
            message += match.message + "\n";
        });
        alert(message);
    } else {
        alert("No issues found!");
    }
};
