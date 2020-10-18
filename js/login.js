import User from './User.js'
export default class LoginUser {
    authenticated() {
        const loggedUser = localStorage.getItem('user');
        if(window.location.pathname === '/views/login.html') {
            if(loggedUser) {
                window.location.href = "../index.html";
            }
        }
    }
    getUsers() {
        const user = new User()
        const requestUrl = "https://matter-app.herokuapp.com/api/v1/users";
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        }
        fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => user.searchUser(data))
    }
}
