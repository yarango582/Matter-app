import Feedback from './Feedback.js'
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
            fetch(`https://matter-app.herokuapp.com/api/v1/users/${user.id}`, requestOptions)
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

        let menu = document.getElementById('body-home');
        const usersFromStorage = localStorage.getItem('user');
        const user = JSON.parse(usersFromStorage);
        
        document.getElementById('change-password').addEventListener('click', () =>{
            const feedback = new Feedback
            feedback.cleanHtml()
            const activeIconProfile = document.getElementById('icon-profile')
            activeIconProfile.classList.toggle('active')
            menu.innerHTML = `<div class="container" id="container-change-password">
                                    <div class="row text-center row-form-password" id="row-form-password">
                                        <div class="col-md-12">
                                            <div class="card">
                                                <div class="card-title mt-3">
                                                    <h3>Modificar tus datos</h3>
                                                </div>
                                                <div class="card-body">
                                                    <form action="/" id="form-change-password">
                                                        <div class="form-group">
                                                        <label for="name-user">Modifica tu nombre</label>
                                                        <input type="text" class="form-control" id="name-user" placeholder="Nombre" value="${user.name}">
                                                        </div>
                                                        <div class="form-group">
                                                        <label for="password-1">Ingrese la contraseña</label>
                                                        <input type="password" class="form-control" id="password-1" placeholder="*****">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="password-2">Confirme la contraseña</label>
                                                            <input type="password" class="form-control" id="password-2" placeholder="*****">
                                                        </div>
                                                        <button type="submit" class="btn btn-primary">Enviar</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`

                document.getElementById(`form-change-password`).addEventListener("submit", (event) => {
                    event.preventDefault();
                    this.newPassword()
                }); 
            
            })     
        

    }

    obtainUser(){
        const usersFromStorage = localStorage.getItem('user');
        const user = JSON.parse(usersFromStorage);
        // console.log(user)
        return user;
    }



}