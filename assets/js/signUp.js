/*code for action sign up page */

let url_string = window.location.href;
let url = new URL(url_string);
let nameParam = url.searchParams.get("name");
let emailParam = url.searchParams.get("email");
let childParam = url.searchParams.get("child");
let dateParam = url.searchParams.get("date");
let timeParam = url.searchParams.get("time");

document.getElementById("name1Confirm").innerHTML = nameParam;
document.getElementById("email1Confirm").innerHTML = emailParam;
document.getElementById("dateConfirm").innerHTML = dateParam;
document.getElementById("timeConfirm").innerHTML = timeParam;
document.getElementById("childConfirm").innerHTML = childParam;