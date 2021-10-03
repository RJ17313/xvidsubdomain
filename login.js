const username = "Ryan"
const password = "BigAssLover69"

function login(event){
    event.preventDefault()

    const usernameField = document.getElementById("username")
    const passwordField = document.getElementById("password")

    if((usernameField.value == username) && (passwordField.value == password)){
        window.location.href = "https://youtu.be/dQw4w9WgXcQ"
    }
    else{
        alert("Wrong password, get out of my stash")
    }
    
}