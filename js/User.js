export default class User {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
    }

    addUser() {
        const getName = document.getElementById('name')
        const getEmail = document.getElementById('email')
        const getPassword = document.getElementById('password')
        let returnValue = {
            name: getName.value,
            email: getEmail.value,
            password: getPassword.value
        }
        return returnValue
    }

    checkerUser(user) {
        if(user !== 'Unauthorized') { // si existe un usuario
            const stringUser = JSON.stringify(user);
            localStorage.setItem('user', stringUser);
            window.location.href = "../index.html";
        } else {
            alert('No se encontró un usuario con tus credenciales');

        }
    }
    
    obtainUser(){
        const usersFromStorage = localStorage.getItem('user');
        const user = JSON.parse(usersFromStorage);
        // console.log(user)
        return user;
    }



}