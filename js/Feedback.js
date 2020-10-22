import obtainUser from './User.js'
import Skills from "./evaluate-skills.js";
export default class Feedback {

    constructor(idInvitation, nameUser) {
        this.idInvitation = idInvitation
        this.nameUser = nameUser
    }

    containerInviteUsers() {
        const activeHome = document.getElementById('home')
        activeHome.classList.toggle('active')
        const activeIconHome = document.getElementById('icon-home')
        activeIconHome.classList.toggle('active')
        const container = document.getElementById('feedback')
        container.innerHTML = `<div class="container mt-5" id="container-invite-feedback">
                                    <div class="row text-center row-form-invite-feedback" id="row-form-invite-feedback">
                                        <div class="col-md-12">
                                            <div class="card">
                                                <div class="card-title mt-3">
                                                    <h3>Invita a que te den retroalimentación</h3>
                                                </div>
                                                <div class="card-body">
                                                    <form onsubmit="event.preventDefault()" action="/" id="form-invite-feedback">
                                                        <div class="form-group">
                                                            <label for="email-invite-feed"></label>
                                                            <input type="email" class="form-control" id="email-invite-feed" placeholder="@correo.com">
                                                        </div>
                                                        <button type="submit" class="btn btn-primary">Invitar</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`

        document.getElementById('form-invite-feedback').addEventListener('submit', (event) =>{ 
            //evento para ancla
            event.preventDefault();
            this.inviteUsers();
        })
    }
    
    inviteUsers() {
        const User = new obtainUser;
        let userStorage = User.obtainUser();
        // userStorage = JSON.parse(userStorage);
        const dataEmail = document.getElementById('email-invite-feed').value;
        const urlencoded = {email: dataEmail,}
        var requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(urlencoded),
            redirect: 'follow'
          };  
          fetch(`https://matter-app.herokuapp.com/api/v1/users/${userStorage.id}/invite`, requestOptions)
            .then(response => response.text())
            .then(result => {
                            console.log(result);
                            document.getElementById("form-invite-feedback").reset();
                            alert("invitacion enviada con exito.")})
            .catch(error => console.log('error', error));
    }

    // Notificaciones 

	bodyDiv() {
        this.cleanHtml()
        const activeIconNotificade = document.getElementById('icon-notificade')
        activeIconNotificade.classList.toggle('active')
        const ContainerMain = document.getElementById("body-home");
        ContainerMain.innerHTML += `
    <div id="feedback" class="container mt-6">
        <div class="row">
            <div id="left" class="col-md-7">
            </div>
            <div id="" class="col-md-4">
            </div>
		</div>
		
    </div>
            `;
		let y = JSON.parse(`${localStorage.getItem("user")}`);
		// let z = JSON.parse(`${y}`);
		this.GetNotificade(y.id);
	}
	NumberNotificade(x) {
		const container = document.getElementById("notificade");
        container.innerHTML = ``
        container.innerHTML += `
    <button class="btn btn-primary" id="" type="submit">
    <svg
    width="1.5em"
    height="1.5em"
    viewBox="0 0 24 24"
    class="bi bi-house-fill"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
    d="M10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4V5H10V4Z"
    ></path>
    <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4V4.28988C16.8915 5.15043 19 7.82898 19 11V17.1765L19 16.2353C19 16.549 19.2 17.1765 20 17.1765C21.1046 17.1765 22 18.0719 22 19.1765V19.5C22 19.7761 21.7761 20 21.5 20H2.5C2.22386 20 2 19.7761 2 19.5V19.1765C2 18.0719 2.89543 17.1765 4 17.1765C4.7969 17.1765 4.99845 16.5539 5 16.239V11C5 7.82897 7.10851 5.15043 10 4.28988V4ZM12 23C13.1046 23 14 22.1046 14 21H10C10 22.1046 10.8954 23 12 23Z"
    ></path>
    </svg>
    <div class="notificade">
    <span>
    ${x}
    </span>
    </div>
    </button> `;
	}
	GetNotificade(id) {
		console.log(id)
		const requestUrl = `https://matter-app.herokuapp.com/api/v1/users/${id}/feedback-invitations`;
		const requestOptions = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		};
		fetch(requestUrl, requestOptions)
			.then((response) => response.json())
			.then((data) => this.printiNotificade(data));
	}
	GetName(id) {
		const requestUrl = `https://matter-app.herokuapp.com/api/v1/users/${id}`;
		const requestOptions = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		};
		fetch(requestUrl, requestOptions)
			.then((response) => response.json())
            .then((data) =>{
                this.printName(data.name,data.id)
            });
	}
	bodyNotificade() {
		const ContainerMain = document.getElementById("left");
		ContainerMain.innerHTML = "";
		ContainerMain.innerHTML += `
        <div class="card">
        <div id="header-notificade" class="card-header">
            
            </div>
            <div id="cont-notificade" class="card-body">
            </div>
            </div>
            `;
	}
	PrintDate(x) {
		let y = "";
		for (let i = 0; i < 10; i++) {
			y += x[i];
		}
		y += "</br> hrs:";
		for (let i = 11; i < 19; i++) {
			y += x[i];
		}
		return y;
    }
    printName(Name,id){
        const name = document.getElementById(id);
		const img = document.getElementById(`img${id}`);
		name.innerHTML = `<p>${Name}</p>`;
		img.innerHTML = `<img src="" alt="${Name}" srcset="">`;
		
    }
	listNotificade(invitation) {
		// this.idInvitation = invitations
		// console.log(this.idInvitation)
		const header = document.getElementById("header-notificade");
		header.innerHTML = "Awaiting Feedback";
		const notificade = document.getElementById("cont-notificade");
			notificade.innerHTML += `
        <div class="row">
        <div id="img${invitation.user_id}"class="col-md-3">
        </div>
        <div  class="col-md">
        <span id="${invitation.user_id}"></span>
        <p>would like to hear your feedback.</br>${this.PrintDate(invitation.created_at)} </p>
        </div>
        <div class="col-md-2">
            <div class="btn-group-vertical" role="group" aria-label="Basic example">
				<button id="start ${invitation.id}" type="button" class="btn btn btn-primary">Start</button>
                <button id="decline" type="button" class="btn btn-outline-primary">Decline</button>
            </div>
        </div>
		`;

		this.GetName(invitation.user_id)
		

			document.getElementById(`start ${invitation.id}`).addEventListener("click", (event) => {
				event.preventDefault();
				const skills = new Skills;
				skills.getFeedback(invitation.id);
            });
            
	}
	printiNotificade(invitations) {
		let contador = 0
		if(invitations.length) {
			invitations.forEach((invitation) => {
				if(invitation.evaluated_skills != 3) {
					console.log(invitation)
					this.bodyNotificade();
					this.listNotificade(invitation);
					contador++
				}
			})
			if(contador === 0) {
				this.bodyNotificade();
				this.listnone();
			}
			
			
			// document.getElementById("start").addEventListener("click", (event) => {
			// 	event.preventDefault();
			// 	const feedback = new Feedback();
			// 	feedback.getFeedback();
			// });
			// document.getElementById("decline").addEventListener("click", (event) => {
			// 	event.preventDefault();
			// 	storage.removeItem(keyName);
			// });
		} else {
			this.bodyNotificade();
			this.listnone();
		}
	}
	listnone() {
		const header = document.getElementById("header-notificade");
		header.innerHTML = "Notifications";
		const notificade = document.getElementById("cont-notificade");
		notificade.innerHTML = `
        <div>
        <span>
        Oh, notifications! <br/>(You don’t have any yet.)
        </span>
        <p>
        Connect with your peers, ask for feedback, and we’ll let you know about all
        the things that matter.
	        </p>
        </div>
        `;
    }
    

    // A quien le hecho feedback notificacio
    first() {
        let obtener = JSON.parse(`${localStorage.getItem('user')}`);
        this.ObtenerLista(obtener.id)
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
        // const cardFeedback = document.getElementById('feedback')
        // cardFeedback.innerHTML = ''
        this.cleanHtml()
        const activeAdvisors = document.getElementById('advisors')
        activeAdvisors.classList.toggle('active')
        const activeIconAdvisors = document.getElementById('icon-advisors')
        activeIconAdvisors.classList.toggle('active')
        const Container = document.getElementById("feedback")
        Container.innerHTML = ''
        let contador = 1;
        Container.innerHTML=
        `
        <h2 id="title-lista">Lista de correos que has enviado invitación</h2>
        `
        const classAdvisor = document.getElementById('feedback')
        classAdvisor.classList.toggle('card')
        let identi
        const dataId = data.map((d) => d.user_invited_id)
        const dataSet = new Set()
        dataId.forEach((id) => {
            dataSet.add(id)
        })
        dataSet.forEach(id => {
            identi= id;
            const requestUrl = `https://matter-app.herokuapp.com/api/v1/users/${identi}`;
            const requestInfo = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            }
            fetch(requestUrl, requestInfo)
            .then(response => response.json())
            .then(data => {
                    Container.innerHTML += `
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
                contador ++;
        })
        });
    }

    // mis estadisticas de Feedback
    getFeedbackEvaluated() {
        let getId = JSON.parse(localStorage.getItem('user'));
        const requestUrl = `https://matter-app.herokuapp.com/api/v1/users/${getId.id}/invitations`;
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        }
        fetch(requestUrl, requestOptions)
        .then( response => response.json())
        .then(data => this.printFeedbackEvaluated(data))
        .catch(error => console.log('error', error));
    }
    printFeedbackEvaluated(data) {

        this.cleanHtml()
        const activeSkills = document.getElementById('skills')
        activeSkills.classList.toggle('active')
        const activeIconSkills = document.getElementById('icon-skills')
        activeIconSkills.classList.toggle('active')
        const cardFeedback2 = document.getElementById('feedback2')
        cardFeedback2.classList.remove('card')
        cardFeedback2.classList.toggle('card')
        const cardFeedback = document.getElementById('feedback')
        cardFeedback.innerHTML = ''
        cardFeedback.classList.remove('card-body')
        cardFeedback.classList.toggle('card-body')
        data.forEach((d) => {
            const skills = d.skills
            if(skills.length) {

                const requestUrl = `https://matter-app.herokuapp.com/api/v1/users/${d.user_invited_id}`;
                const requestInfo = {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                }
                fetch(requestUrl, requestInfo)
                .then(response => response.json())
                .then(data => {
                    cardFeedback.innerHTML += `<h5 class="card-title">${data.name}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">Skills</h6>`
                    skills.forEach((skill) => {
                    const score = skill.pivot
                    cardFeedback.innerHTML += `<span class="mr-5">${skill.name}: ${score.score}</span>`
                })
                })

                
            }
        })
    }

    cleanHtml() {
        const activeHome = document.getElementById('home')
        activeHome.classList.remove('active')
        const activeIconHome = document.getElementById('icon-home')
        activeIconHome.classList.remove('active')
        const activeAdvisors = document.getElementById('advisors')
        activeAdvisors.classList.remove('active')
        const activeIconAdvisors = document.getElementById('icon-advisors')
        activeIconAdvisors.classList.remove('active')
        const activeSkills = document.getElementById('skills')
        activeSkills.classList.remove('active')
        const activeIconSkills = document.getElementById('icon-skills')
        activeIconSkills.classList.remove('active')
        const activeIconNotificade = document.getElementById('icon-notificade')
        activeIconNotificade.classList.remove('active')
        const activeIconProfile = document.getElementById('icon-profile')
        activeIconProfile.classList.remove('active')

        const classAdvisor = document.getElementById('feedback')
        classAdvisor.classList.remove('card')

        const bodyHome = document.getElementById('body-home')
        bodyHome.innerHTML = ''
        const cardFeedback = document.getElementById('feedback')
        cardFeedback.innerHTML = ''
        const cardFeedback2 = document.getElementById('feedback2')
        cardFeedback2.classList.remove('card')
        const hidePassword = document.getElementById('profile-row')
        hidePassword.style.display = 'none'
    }
}
