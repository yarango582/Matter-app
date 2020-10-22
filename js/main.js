import User from './User.js'
import Authenticated from "./authenticated.js";
import UI from './UI.js';
import Feedback from './feedback.js'


const user = new User;
const feedback = new Feedback;
const authenticated = new Authenticated();


authenticated.authenticated();
authenticated.verificarLogin();


if (window.location.pathname === "/views/login.html") {
	document.getElementById("login").addEventListener("submit", (event) => {
		event.preventDefault();

        authenticated.loginUsers()
    })
}

if (window.location.pathname === "/views/register.html") {
	document.getElementById("register").addEventListener("submit", (event) => {
		event.preventDefault();

		authenticated.postUsers();
	});
}
if (window.location.pathname === "/index.html" || window.location.pathname === '/') { //validamos ruta index
		
	feedback.containerInviteUsers()
	const ui = new UI;
	ui.informationUser()
	ui.mostrarMenuProfile(); //controlador de vistas
	user.mostrarMenuCambiarContraseña(); //controlador de vistas

	document.getElementById('logout').addEventListener('click', (go) =>{ //evento para ancla
		authenticated.finalizarSesion() //Re-utilizamos la clase agregando nuevos metos
		window.location.reload(); //recargamos para finalizar sesion
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

//notificade
document.getElementById("note").addEventListener("click",(event)=>{
	event.preventDefault();
	feedback.bodyDiv();
});

//************************** PEERS *************************************/
document.getElementById("peers").addEventListener("click",(event)=>{
	event.preventDefault();
	feedback.first()
});

// obtener calificacion de feebacks
document.getElementById('feedback-evaluated').addEventListener('click', () => {
	feedback.getFeedbackEvaluated()
})