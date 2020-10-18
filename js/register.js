import User from './User.js'
export default class RegisterUser {
    getUsers() {
        let getStatus
        const user = new User()
        const url = "https://matter-app.herokuapp.com/api/v1/users";
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(user.addUser())
        }
        fetch(url, options)
        .then( response => {
            getStatus = response.status
            return response.json()
        })
        .then(() => {
            if(getStatus === 201) {
                localStorage.setItem('users', JSON.stringify(user.addUser()))
                // location.replace('../index.html')
            }
        })
    }
}
