
//set constants for query selectors
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

// add event listener to cookie btn
cookieButton.addEventListener("click", () => {

    cookieContainer.classList.remove("active");
//set local storage so that cookie btn doesn't appear all the time.
    localStorage.setItem("cookieBannerDisplayed", "true")
});

if(!localStorage.getItem("cookieBannerDisplayed"))
setTimeout(() =>{
    cookieContainer.classList.add("active");
}, 2000);