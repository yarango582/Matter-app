import obtainUser from './User.js'
export default class ChangePassword {
    newPassword() {
        const User = new obtainUser;
        let userStorage = User.obtainUser();
        userStorage = JSON.parse(userStorage);
        const dataNewPassword1 = document.getElementById("password-1").value;
        const dataNewPassword2 = document.getElementById("password-2").value;
        if(dataNewPassword1 === dataNewPassword2) {
            const urlencoded = { email : userStorage.email,
                                password: dataNewPassword1,}
            var requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(urlencoded),
            redirect: 'follow'
            };  
            fetch(`http://matter-app.herokuapp.com/api/v1/users/${userStorage.id}`, requestOptions)
            .then(response => response.text())
            .then(result => {console.log(result)
                            document.getElementById("form-change-password").reset();
                            alert("contraseña modificada con exito!")})
            .catch(error => console.log('error', error));
        }else {
            alert("las contraseñas no coinciden");
        }
    }
}