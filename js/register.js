import User from './User.js'
export default class RegisterUser {
    getUsers() {
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
                localStorage.setItem('users', JSON.stringify(urlencoded.addUser()))
                console.log(urlencoded.addUser())
                location.replace('../index.html')
            }
        })
    }
}
