export default class Feedback {
    getFeedback(){
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
        const ContainerMain = document.getElementById("feedback");
        ContainerMain.innerHTML = "";
        //console.log(skills[0].name)
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
                                <input id="radio5-${skill.id}" type="radio" name="${skill.name}" value="1">
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
        x.forEach(skill => {
            idSkill=skill.id
            z =document.getElementsByName(`${skill.name}`)
            z.forEach(chek=> {
                if(chek.checked){
                    console.log(idSkill)
                    score=chek.value
                    console.log(z,score)
                    //this.upPost(,idSkill,score)
                }
            });
            
        });
    }
    upPost(invitate,skill,score){
        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        let urlencoded = new URLSearchParams();
        urlencoded.append("score", `${score}`);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };
    fetch(`http://localhost:8000/api/v1/invitations/${invitate}/skills/${skill}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
}