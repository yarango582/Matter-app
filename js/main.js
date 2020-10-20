import verificarLogin from './authenticated.js';
import LoginUser from './login.js';
import RegisterUser from './register.js'
import Authenticated from './authenticated.js'


import Invitated from './invitated.js'

const login = new LoginUser
login.authenticated()

const authenticatedIndex = new Authenticated
authenticatedIndex.verificarLogin();

if(window.location.pathname === '/views/login.html') {
    document.getElementById('login').addEventListener('submit', (event) => {
        event.preventDefault()

        login.loginUsers()
    })
}

if(window.location.pathname === '/views/register.html') {
    document.getElementById('register').addEventListener('submit', (event) => {
        event.preventDefault()

        const register = new RegisterUser
        register.getUsers()
    })
}

// if(window.location.pathname === '/index.html') {
//     const invitated = new Invitated;
//     invitated.inviteUsers();
// }

// const register = new RegisterUser

// const registerUser = new RegisterUser
// registerUser.addUser()
