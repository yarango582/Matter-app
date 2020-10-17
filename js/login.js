


function getUsers() {

    fetch(`https://matter-app.herokuapp.com/api/v1/users`)
    .then(response => response.json())
    .then(users => searchUser(users));

}




function searchUser(users) {


    const dataEmail = "prueba@prueba.com";
    const dataPassword = "Prueba";


    

    const user = users.find((user) => {
        return dataEmail === user.email && dataPassword === user.name
    })

    
    
    if(user) { // si existe un usuario
        storage(user);
        window.location.href = "../index.html";

    } else {

        alert('No se encontró un usuario con tus credenciales');
    }

}

function storage(user) {
    
    const stringUser = JSON.stringify(user);
    localStorage.setItem('user', stringUser);

}

getUsers();