/*code for action Contact Us window */

let url_string = window.location.href;
let url = new URL(url_string);
let nameParam = url.searchParams.get("name")
let dateParam = url.searchParams.get("date");
let inquireAboutParam = url.searchParams.get("inquireAbout");
let timeParam = url.searchParams.get("time");

document.getElementById("name1Confirm").innerHTML = nameParam;
document.getElementById("date1Confirm").innerHTML = dateParam;
document.getElementById("inquireAboutConfirm").innerHTML = inquireAboutParam;
document.getElementById("timeConfirm").innerHTML = timeParam;
