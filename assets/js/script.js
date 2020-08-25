/*code for action confirmation booking window */

let url_string = window.location.href;
let url = new URL(url_string);
let inquireAboutParam = url.searchParams.get("inquireAbout");
let timeParam = url.searchParams.get("time");
document.getElementById("inquireAboutConfirm").innerHTML = inquireAboutParam;
document.getElementById("timeConfirm").innerHTML = timeParam;
