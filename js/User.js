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
            const stringUser = user;
            localStorage.setItem('user', stringUser);
            window.location.href = "../index.html";
        } else {
            alert('No se encontró un usuario con tus credenciales');

        }
    }
    
    newPassword() {
        const usersFromStorage = localStorage.getItem('user');
        const user = JSON.parse(usersFromStorage);
        const dataNewPassword1 = document.getElementById("password-1").value;
        const dataNewPassword2 = document.getElementById("password-2").value;
        const dataNewName = document.getElementById("name-user").value;
        if(dataNewPassword1 === dataNewPassword2) {
            const urlencoded = { name: dataNewName,
                                email : user.email,
                                password: dataNewPassword1,}
            var requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(urlencoded),
            redirect: 'follow'
            };  
            fetch(`http://matter-app.herokuapp.com/api/v1/users/${user.id}`, requestOptions)
            .then(response => response.text())
            .then(result => {console.log(result)
                            localStorage.clear()
                            user.name = document.getElementById("name-user").value
                            const stringUser = JSON.stringify(user);
                            localStorage.setItem('user', stringUser);
                            document.getElementById("form-change-password").reset();
                            alert("usuario modificado con exito!")
                            window.location.reload();
                        })

            .catch(error => console.log('error', error));
        }else {
            alert("las contraseñas no coinciden");
        }
    }
    mostrarMenuCambiarContraseña(){

        let menu = document.getElementById('row-form-password');
        let menuFeed = document.getElementById('row-form-invite-feedback');
        const usersFromStorage = localStorage.getItem('user');
        const user = JSON.parse(usersFromStorage);
        menu.style.display = 'none';
        
        if(menu != null){
            document.getElementById('change-password').addEventListener('click', (even) =>{
                
                document.getElementById("name-user").value = user.name;

                switch (menu.style.display) {
                    case 'none':
                        menu.style.display = 'block';
                        menuFeed.style.display = 'none';
                        break;
                    case 'block':
                        menu.style.display = 'none';
                        break;
                    default:
                        console.log('Error revisa el codigo');
                        break;
                }
            })     
        }

    }

    obtainUser(){
        const usersFromStorage = localStorage.getItem('user');
        const user = JSON.parse(usersFromStorage);
        // console.log(user)
        return user;
    }



}