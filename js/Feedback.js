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
        const ContainerMain = document.getElementById("feedback");
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
                            </blockquote>
                        </div>
                        <form name="${skill.id}" id="${skill.id}" action="" method="POST">
                            <p class="clasificacion">
                                <input id="radio1-${skill.id}" type="radio" name="${skill.id}" value="5">
                                <label for="radio1-${skill.id}">★</label>
                                <input id="radio2-${skill.id}" type="radio" name="${skill.id}" value="4">
                                <label for="radio2-${skill.id}">★</label>
                                <input id="radio3-${skill.id}" type="radio" name="${skill.id}" value="3">
                                <label for="radio3-${skill.id}">★</label>
                                <input id="radio4-${skill.id}" type="radio" name="${skill.id}" value="2">
                                <label for="radio4-${skill.id}">★</label>
                                <input id="radio5-${skill.id}" type="radio" name="${skill.id}" value="1">
                                <label for="radio5-${skill.id}">★</label>
                            </p>
                        </form>
                        <div class="col-md-2">
                            <div class="btn-group-vertical" role="group" aria-label="Basic example">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        });
        const button = document.getElementById("feedback");
		//button.innerHTML = ``;
		button.innerHTML += `<button class="btn btn-primary button" onclick="">enviar</button>`;
    }
}