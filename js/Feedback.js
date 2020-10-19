export default class Feedback {
    getFeedback(){
        const requestUrl = "https://matter-app.herokuapp.com/api/v1/skills";
        const printi = new PrintFeedback()
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        }
        fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => printi.printiFeedback(data));
    }
}

class PrintFeedback{
    printiFeedback(skills){
        const ContainerMain = document.getElementById("content-main");
        ContainerMain.innerHTML = "";
        console.log(skills[0].name)
        skills.forEach((skill) => {
            ContainerMain.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                        <img src="" alt="" srcset="${skill.name}">
                        </div>
                        <div class="col-md">
                        <blockquote class="blockquote mb-0">
                            <span color="black" font-size="inherit" font-weight="400" >${skill.name}</span>
                            <p>would like to hear your feedback.</p>
                            </blockquote>
                        </div>
                        <div class="col-md-2">
                            <div class="btn-group-vertical" role="group" aria-label="Basic example">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        });
        
    }
}