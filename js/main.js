const loggedUser = localStorage.getItem('user');

if(!loggedUser) {
    window.location.href = "./views/login.html";
}