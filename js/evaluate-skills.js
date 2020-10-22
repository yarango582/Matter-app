export default class Skills {
    constructor(invitationId) {
        this.invitationId = invitationId
    }
    getFeedback(id){
        this.invitationId = id
        const requestUrl = "https://matter-app.herokuapp.com/api/v1/skills";
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        }
        fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => this.printFeedback(data));
    }
    printFeedback(skills){
        const cleanHtml = document.getElementById('body-home')
        cleanHtml.innerHTML = ''
        const ContainerMain = document.getElementById("feedback");
        ContainerMain.innerHTML = "";
        skills.forEach((skill) => {
            ContainerMain.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <div class="row">
                            <span color="black" font-size="inherit" font-weight="400" >${skill.name}</span>
                            <form name="${skill.name}" class="start" id="${skill.id}" action="" method="POST">
                                <p class="clasificacion">
                                <input id="radio1-${skill.id}" type="radio" name="${skill.name}" value="5">
                                <label for="radio1-${skill.id}">★</label>
                                <input id="radio2-${skill.id}" type="radio" name="${skill.name}" value="4">
                                <label for="radio2-${skill.id}">★</label>
                                <input id="radio3-${skill.id}" type="radio" name="${skill.name}" value="3">
                                <label for="radio3-${skill.id}">★</label>
                                <input id="radio4-${skill.id}" type="radio" name="${skill.name}" value="2">
                                <label for="radio4-${skill.id}">★</label>
                                <input id="radio5-${skill.id}" type="radio" name="${skill.name}" value="1" checked>
                                <label for="radio5-${skill.id}">★</label>
                                </p>
                            </form>
                    </div>
                </div>
            </div>
        `;
        });
        const button = document.getElementById("feedback");
        button.innerHTML += `<button id="read" class="btn btn-primary button" onclick="">enviar</button>`;
        document.getElementById("read").addEventListener("click", (event) => {
            event.preventDefault();
            this.read(skills)
        });
    }
    read(x) {
        let idSkill
        let z
        let score
        let contador = 0
        x.forEach(skill => {
            idSkill=skill.id
            z =document.getElementsByName(`${skill.name}`)
            z.forEach(chek=> {
                if(chek.checked){
                    console.log(idSkill)
                    score=chek.value
                    console.log(z,score)
                    this.upPost(this.invitationId, idSkill, score)
                    contador++
                    if(contador === 3) {
                        alert('Feedback Calificado')
                    }
                }
            });
            
        });
    }
    upPost(invitate, skill, score){
        const requestUrl = `https://matter-app.herokuapp.com/api/v1/invitations/${invitate}/skills/${skill}`
        let requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({
                score: score
            }),
            redirect: 'follow'
        };
    fetch(requestUrl, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            window.location.href = "/";
        })
        .catch(error => console.log('error', error));
    }
}