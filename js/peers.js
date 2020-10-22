export default class Peers {


    // Entro() {
    //     //console.log("entramos papu");
    //     this.first();
    // }

    first() {
        let obtener= JSON.parse(`${localStorage.getItem('user')}`);
        let obtenerObjeto= JSON.parse(`${obtener}`)
        this.ObtenerLista(obtenerObjeto.id)
    }

    ObtenerLista(id) {
        const requestUrl = `https://matter-app.herokuapp.com/api/v1/users/${id}/invitations`;
        const requestInfo = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        }
        fetch(requestUrl, requestInfo)
        .then(response => response.json())
        .then(data => this.ObtenerUser(data));
    }   

    ObtenerUser(data) {
        const Container = document.getElementById("body-home")
        let contador = 1;
        Container.innerHTML=
        `
        <div class=container-list>
        <h2 id="title-lista">Lista de correos que has enviado invitación</h2>
        </div>
        `
        let identi
        data.forEach(element => {
            identi=element.id;
            const requestUrl = `https://matter-app.herokuapp.com/api/v1/users/${identi}`;
            const requestInfo = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        }
        fetch(requestUrl, requestInfo)
        .then(response => response.json())
        .then(data => {
            Container.innerHTML += 
            `
            <table class="table container-list">
                <tbody>
                    <tr>
                        <th scope="row">${contador}</th>
                        <td>${data.email}</td>
                        <td>${data.name}</td>
                    </tr>
                </tbody>
            </table>
            `
            // <div class=container-list>
            //     <h4>${contador}.- Enviado al correo: ${data.email}</h4>
            // </div>
            contador ++;
        })
        });
    }

}