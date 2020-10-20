import verificarLogin from "./authenticated.js";
import LoginUser from "./login.js";
import RegisterUser from "./register.js";
import Authenticated from "./authenticated.js";
import Notificades from "./notificade.js";
import Feedback from "./Feedback.js";
import UI from './UI.js';
import newPassword from './newPassword.js';

const login = new LoginUser();
login.authenticated();

const authenticatedIndex = new Authenticated();
authenticatedIndex.verificarLogin();


if (window.location.pathname === "/views/login.html") {
	document.getElementById("login").addEventListener("submit", (event) => {
		event.preventDefault();

        login.loginUsers()
    })
}

if (window.location.pathname === "/views/register.html") {
	document.getElementById("register").addEventListener("submit", (event) => {
		event.preventDefault();

		const register = new RegisterUser();
		register.getUsers();
	});
}

if (window.location.pathname === "/index.html") { //validamos ruta index
		const ui = new UI;
		ui.mostrarMenuProfile(); //controlador de vistas
		ui.mostrarMenuCambiarContraseña() //controlador de vistas
		document.getElementById('logout').addEventListener('click', (go) =>{ //evento para ancla
			authenticatedIndex.finalizarSesion() //Re-utilizamos la clase agregando nuevos metos
			window.location.reload(); //recargamos para finalizar sesion
		})
		document.getElementById('form-change-password').addEventListener('submit', (event) =>{ 
			//evento para ancla
			event.preventDefault();
			const changePassword = new newPassword;
			changePassword.newPassword();
		})
}

// notificade.GetNotificade();
// document.getElementById("start").addEventListener("click", () => {
// 	const feedback = new Feedback();
// 	feedback.getFeedback();
// });
// document.getElementById("decline").addEventListener("click", () => {
// 	storage.removeItem(keyName);
// });

// if(window.location.pathname === '/index.html') {
//     const invitated = new Invitated;
//     invitated.inviteUsers();
// }

// const register = new RegisterUser