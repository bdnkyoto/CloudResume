const apiUrl = "https://l65rcuaptvggp4i2zobbzp4r2e0piwxo.lambda-url.us-east-1.on.aws/";

var typed = new Typed('#typed', {
    strings: ["Systems Architecture Student.", "Learner.", "Cloud Enthusiast."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed2 = new Typed('#typed_2', {
    strings: ["IT Major", "Learner.", "Cloud Enthusiast."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

const counter = document.querySelector(".counter-number");

async function updateCounter() {

        let response = await fetch(apiUrl, {
            method: 'POST'
        });

        // Parse the response JSON
        let data = await response.json();
        counter.innerHTML = `👀 this page has been viewed ${data} times.`;

}

updateCounter();

