import obtainUser from './User.js'

export default class Invitated {


    inviteUsers() {
        const User = new obtainUser;
        let userStorage = User.obtainUser();
        userStorage = JSON.parse(userStorage);

        const dataEmail = 'erik@academlo.com';

        // console.log(userStorage.id)


        const urlencoded = {email: dataEmail,}
        

        var requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(urlencoded),
            redirect: 'follow'
          };
          
          
          fetch(`http://matter-app.herokuapp.com/api/v1/users/${userStorage.id}/invite`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }
}