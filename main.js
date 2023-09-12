function login() {
    var email = document.getElementById("tbEmail").value;
    var password = document.getElementById("tbPassword").value;

    const baseURL = "http://localhost5000";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": email,
        "password": password  
    })

    var requestOption = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(baseURL + "/api/auth/login", requestOption)
        .then(response => response.json())
        .then(result => console.log(result))
        .cath(error => console.log('error', error));
}