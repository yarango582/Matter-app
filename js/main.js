import verificarLogin from "./authenticated.js";
import LoginUser from "./login.js";
import RegisterUser from "./register.js";
import Authenticated from "./authenticated.js";
import Notificades from "./notificade.js";
import Feedback from "./Feedback.js";
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
//notificade

document.getElementById("note").addEventListener("click", () => {
	const notificade = new Notificades();
	notificade.NumberNotificade(1);
let x = [
	{
		id: 1,
		name: "Comunicaci\u00f3n",
		created_at: "2020-10-16T04:48:56.000000Z",
		updated_at: "2020-10-16T04:48:56.000000Z",
	},
	{
		id: 2,
		name: "Empat\u00eda",
		created_at: "2020-10-16T04:48:56.000000Z",
		updated_at: "2020-10-16T04:48:56.000000Z",
	},
	{
		id: 3,
		name: "Liderazgo",
		created_at: "2020-10-16T04:48:56.000000Z",
		updated_at: "2020-10-16T04:48:56.000000Z",
	},
];
notificade.GetNotificade(x);
});
document.getElementById("start").addEventListener("click", () => {
	const feedback = new Feedback();
	feedback.getFeedback();
});
document.getElementById("decline").addEventListener("click", () => {
	storage.removeItem(keyName);
});

// if(window.location.pathname === '/index.html') {
//     const invitated = new Invitated;
//     invitated.inviteUsers();
// }

// const register = new RegisterUser

// const registerUser = new RegisterUser
// registerUser.addUser()
