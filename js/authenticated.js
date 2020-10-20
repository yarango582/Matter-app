export default class Authenticated {
    verificarLogin() {
        const loggedUser = localStorage.getItem('user');
        if((window.location.pathname === '/index.html' || window.location.pathname === '/')&&(loggedUser)) {
            if(!loggedUser) {
                window.location.href = "./views/login.html";
            }
        }
    }
}