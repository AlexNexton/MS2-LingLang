// code for sending an email from a form as taught by code institute 

function sendMail(contactform){
    emailjs.send("gmail", "naic_s", {"from_name": contactform.name.value,
    "from_email": contactform.emailaddress.value,
    "project_request": contactform.inquiry.value
})

    .then(
        function(response){
            console.log("success!!", response);
            window.location.href = "sub.html";
        },
        function(error){
                console.log("Unsuccesful",error);
        });
        return false;
}
