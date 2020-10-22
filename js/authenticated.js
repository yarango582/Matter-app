import User from './User.js'
export default class Authenticated {

    // Middleware
    verificarLogin() {
        const loggedUser = localStorage.getItem('user');
        if((window.location.pathname === '/index.html' || window.location.pathname === '/')) {
            if(!loggedUser) {
                window.location.href = "./views/login.html";
            }
        }
    }
    finalizarSesion(){
        localStorage.clear();
    }

    // Registro
    postUsers() {
        let getStatus
        var urlencoded = new User();
        const requestUrl = "https://matter-app.herokuapp.com/api/v1/users";
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(urlencoded.addUser()),
        }
        fetch(requestUrl, requestOptions)
        .then( response => {
            getStatus = response.status
            return response.json()
        })
        .then(() => {
            if(getStatus === 201) {
                this.loginUsers()
            } else if(getStatus === 422) {
                alert('Este usuario ya esta registrado')
            }
        })
    }

    // Login
    authenticated() {
        const loggedUser = localStorage.getItem('user');
        if(window.location.pathname === '/views/login.html') {
            if(loggedUser) {
                window.location.href = "../index.html";
            }
        }
    }
    loginUsers() {
        const dataEmail = document.getElementById('email').value;
        const dataPassword = document.getElementById('password').value;
        const urlencoded = {email: dataEmail,
                            password: dataPassword }
        const user = new User;
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(urlencoded),
            redirect: 'follow'
        }
        fetch("http://matter-app.herokuapp.com/api/v1/auth/login", requestOptions)
        .then(response => response.text())
        .then(result => user.checkerUser(result))
        .catch(error => console.log('error', error));
    }
}