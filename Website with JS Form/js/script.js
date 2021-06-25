document.getElementById("showMessageFormBtn").addEventListener("click", createForm);

function createForm(){

    // Disable Send Message Button
    document.getElementById("showMessageFormBtn").disabled = true;

    //Create and add Form element
    var yodaForm = document.createElement("form");
    yodaForm.setAttribute("id", "myForm");
    document.getElementById("content").appendChild(yodaForm);


    // Creat and Add Div for Name
    var nameDiv = document.createElement("div");
    nameDiv.setAttribute("id", "nameDiv");
    nameDiv.style.display = "flex";
    document.getElementById("myForm").appendChild(nameDiv);

    var fullNameLabel = document.createElement("h2");
    var fullNameLabelText = document.createTextNode("Full Name:");
    fullNameLabel.appendChild(fullNameLabelText);
    nameDiv.appendChild(fullNameLabel);


    var fullName = document.createElement("input");
    fullName.setAttribute("type", "text");
    document.getElementById("nameDiv").appendChild(fullName);


    // Creat and Add Div for Email
    var emailDiv = document.createElement("div");
    emailDiv.style.display = "flex";
    emailDiv.setAttribute("id", "emailDiv");
    document.getElementById("myForm").appendChild(emailDiv);

    var emailLabel = document.createElement('h2');
    var emailLabelText = document.createTextNode("Email address (must end with .ca)");
    emailLabel.appendChild(emailLabelText);
    emailDiv.appendChild(emailLabel);

    var emailAddress = document.createElement("input");    
    emailAddress.setAttribute("type", "text");
    emailDiv.appendChild(emailAddress);

    // Create and Add div for message content
    var contentDiv = document.createElement("div");
    contentDiv.style.display = "flex";
    contentDiv.setAttribute("id", "contentDiv");
    document.getElementById('myForm').appendChild(contentDiv);

    var contentLabel = document.createElement('h2');
    var contentLabelText = document.createTextNode("Your message:");
    contentLabel.appendChild(contentLabelText);
    contentDiv.appendChild(contentLabel);

    var messageContent = document.createElement("textarea");
    contentDiv.appendChild(messageContent);

    // Create and Add Div for Submission Button
    var subButtonDiv = document.createElement('div');
    document.getElementById("myForm").appendChild(subButtonDiv);

    var submissionButton = document.createElement('button');
    var submissionButtonText = document.createTextNode("Send Message Now");
    submissionButton.appendChild(submissionButtonText);
    subButtonDiv.appendChild(submissionButton);







}