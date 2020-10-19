export default class User {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
    }

    addUser() {
        const getEmail = document.getElementById('email')
        const getPassword = document.getElementById('password')
        let returnValue = {
            email: getEmail.value,
            password: getPassword.value
        }
        return returnValue
    }
    searchUser(users) {
        const dataEmail = document.getElementById('email').value;
        const user = users.find((user) => {
            return dataEmail === user.email;
        })
        if(user) { // si existe un usuario
            const stringUser = JSON.stringify(user);
            localStorage.setItem('user', stringUser);
            window.location.href = "../index.html";
        } else {
            alert('No se encontró un usuario con tus credenciales');
        }
    }
    obtainUser(){
        const usersFromStorage = localStorage.getItem('user');
        const user = JSON.parse(usersFromStorage) || [];
        return user;
    }
}