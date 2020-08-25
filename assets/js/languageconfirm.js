/*code for action confirmation booking window */

let url_string = window.location.href;
let url = new URL(url_string);
let childParam = url.searchParams.get("child")
let dateParam = url.searchParams.get("date");
let timeParam = url.searchParams.get("time");

document.getElementById("dateConfirm").innerHTML = dateParam;
document.getElementById("timeConfirm").innerHTML = timeParam;
document.getElementById("childConfirm").innerHTML = childParam;