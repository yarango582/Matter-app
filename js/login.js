import checkerUser from './User.js'
export default class LoginUser {
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
        const user = new checkerUser();
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
