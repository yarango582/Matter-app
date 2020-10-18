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
        fetch(`https://matter-app.herokuapp.com/api/v1/users`)
        .then(response => response.json())
        .then(users => searchUser(users));
    }
    searchUser(users) {
        const dataEmail = document.getElementById('email').value;
        const user = users.find((user) => {
            return dataEmail === user.email;
        })
        if(user) { // si existe un usuario
            storage(user);
            window.location.href = "../index.html";
        } else {
            alert('No se encontró un usuario con tus credenciales');
        }
    }
    storage(user) { 
        const stringUser = JSON.stringify(user);
        localStorage.setItem('user', stringUser);
    }
}
