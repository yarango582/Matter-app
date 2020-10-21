import obtainUser from './User.js'
export default class Invitated {
    inviteUsers() {
        const User = new obtainUser;
        let userStorage = User.obtainUser();
        userStorage = JSON.parse(userStorage);
        const dataEmail = document.getElementById('email-invite-feed').value;
        const urlencoded = {email: dataEmail,}
        var requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(urlencoded),
            redirect: 'follow'
          };  
          fetch(`http://matter-app.herokuapp.com/api/v1/users/${userStorage.id}/invite`, requestOptions)
            .then(response => response.text())
            .then(result => {
                            console.log(result);
                            document.getElementById("form-invite-feedback").reset();
                            alert("invitacion enviada con exito.")})
            .catch(error => console.log('error', error));
    }
}