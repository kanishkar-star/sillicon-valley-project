var openpage = 0;

function addadv(){
    user = "Advocate"

    localStorage.setItem("User", user);

    window.location = "advocate_details.html";

    var openpage = openpage + 1;
}

function addclient(){
    user = "Client"

    localStorage.setItem("User", user);

    window.location = "client_details.html";

    var openpage = openpage + 2;
}

