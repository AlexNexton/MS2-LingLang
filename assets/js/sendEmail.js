function sendMail(contactform){
    emailjs.send("gmail", "naic_s", {"from_name": contactform.name.value,
    "from_email": contactform.emailaddress.value,
    "project_request": contactform.projectsummary.value
})

    .then(
        function(response){
            console.log("success!!", response);
        },
        function(error){
                console.log("Unsuccesful",error);
        });
        return false;
}