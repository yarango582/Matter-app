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
}