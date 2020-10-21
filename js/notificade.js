import Feedback from "./Feedback.js";
export default class Notificades {
    bodyDiv(){
        const ContainerMain = document.getElementById("body-home");
        // const get=new GetNotificades()
        //ContainerMain.innerHTML = "";
        ContainerMain.innerHTML += `
            <div class="container mt-6">
                <div id="feedback" class="row">
                    <div id="left" class="col-md-7">
                    </div>
                    <div id="" class="col-md-4">
                    </div>
                </div>
            </div>
            `;
            let y= JSON.parse(`${localStorage.getItem('user')}`);
            let z= JSON.parse(`${y}`)
            console.log(z)
            this.GetNotificade(z.id)
            
    }
    NumberNotificade(x) {
		const container = document.getElementById("notificade");
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

    GetNotificade(id){
        // const printi = new PrintNotificade()
        const requestUrl = `http://matter-app.herokuapp.com/api/v1/users/${id}/feedback-invitations`;
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        }
        fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => this.printiNotificade(data));
    }
    GetName(id){
        const name=new Info()
        const requestUrl = `https://matter-app.herokuapp.com/api/v1/users/${id}`;
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        }
        fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => name.PrintName(data.name));
    }
    bodyNotificade(){
        const ContainerMain = document.getElementById("left");
        //ContainerMain.innerHTML = "";
        ContainerMain.innerHTML += `
        <div class="card">
        <div id="header-notificade" class="card-header">
            
            </div>
            <div id="cont-notificade" class="card-body">
            </div>
            </div>
            `;
    }
    PrintDate(x){
        let y=""
        for (let i = 0; i < 10; i++) {
            y+=x[i]
        }
        y+="</br> hrs:"
        for (let i = 11; i < 19; i++) {
            y+=x[i]
        }
        return y
    }
    listNotificade(invitations){
        // const date=new Info();
        // const name=new GetNotificades
        const header=document.getElementById("header-notificade")
            header.innerHTML="Awaiting Feedback"
        const notificade=document.getElementById("cont-notificade")
        invitations.forEach((invitation) => {
            notificade.innerHTML+=`
        <div class="row">
        <div class="col-md-3">
        <img src="" alt="" srcset="${name.GetName(invitation.user_id)}">
        </div>
        <div class="col-md">
        <blockquote class="blockquote mb-0">
            <span color="black" font-size="inherit" font-weight="400" >${name.GetName(invitation.user_id)}</span>
            <p>would like to hear your feedback.</br>${date.PrintDate(invitation.created_at)} </p>
        </blockquote>
        </div>
        <div class="col-md-2">
            <div class="btn-group-vertical" role="group" aria-label="Basic example">
                <button id="start" type="button" class="btn btn btn-primary">Start</button>
                <button id="decline" type="button" class="btn btn-outline-primary">Decline</button>
            </div>
        </div>
        `
        })
    }
    listnone(){
        const header=document.getElementById("header-notificade")
        header.innerHTML="Notifications"
        const notificade=document.getElementById("cont-notificade")
        notificade.innerHTML=`
        <div>
            <span>
            Oh, notifications! <br/>(You don’t have any yet.)
            </span>
	        <p>
	        	Connect with your peers, ask for feedback, and we’ll let you know about all
	        	the things that matter.
	        </p>
        </div>
        `
    }
    printiNotificade(invitations) {
        // const body=new BodyNotificades()
        // const list=new ListNotificade()
        if (invitations.length) {
            this.bodyNotificade()
            this.listNotificade(invitations)
            document.getElementById("start").addEventListener("click", (event) => {
                event.preventDefault();
                // const feedback = new Feedback();
                this.getFeedback();
            });
            document.getElementById("decline").addEventListener("click", (event) => {
                event.preventDefault();
                storage.removeItem(keyName);
            });
        } else {
            this.bodyNotificade()
            this.listnone()
        }

    }
}
// class GetNotificades{
    
// }
// class BodyNotificades{
//     bodyNotificade(){
//         const ContainerMain = document.getElementById("left");
//         //ContainerMain.innerHTML = "";
//         ContainerMain.innerHTML += `
//         <div class="card">
//         <div id="header-notificade" class="card-header">
            
//             </div>
//             <div id="cont-notificade" class="card-body">
//             </div>
//             </div>
//             `;
//     }
// }
// class Info{
//     PrintDate(x){
//         let y=""
//         for (let i = 0; i < 10; i++) {
//             y+=x[i]
//         }
//         y+="</br> hrs:"
//         for (let i = 11; i < 19; i++) {
//             y+=x[i]
//         }
//         return y
//     }
// }
// class ListNotificade{
//     listNotificade(invitations){
//         const date=new Info();
//         const name=new GetNotificades
//         const header=document.getElementById("header-notificade")
//             header.innerHTML="Awaiting Feedback"
//         const notificade=document.getElementById("cont-notificade")
//         invitations.forEach((invitation) => {
//             notificade.innerHTML+=`
//         <div class="row">
//         <div class="col-md-3">
//         <img src="" alt="" srcset="${name.GetName(invitation.user_id)}">
//         </div>
//         <div class="col-md">
//         <blockquote class="blockquote mb-0">
//             <span color="black" font-size="inherit" font-weight="400" >${name.GetName(invitation.user_id)}</span>
//             <p>would like to hear your feedback.</br>${date.PrintDate(invitation.created_at)} </p>
//         </blockquote>
//         </div>
//         <div class="col-md-2">
//             <div class="btn-group-vertical" role="group" aria-label="Basic example">
//                 <button id="start" type="button" class="btn btn btn-primary">Start</button>
//                 <button id="decline" type="button" class="btn btn-outline-primary">Decline</button>
//             </div>
//         </div>
//         `
//         })
//     }
//     listnone(){
//         const header=document.getElementById("header-notificade")
//         header.innerHTML="Notifications"
//         const notificade=document.getElementById("cont-notificade")
//         notificade.innerHTML=`
//         <div>
//             <span>
//             Oh, notifications! <br/>(You don’t have any yet.)
//             </span>
// 	        <p>
// 	        	Connect with your peers, ask for feedback, and we’ll let you know about all
// 	        	the things that matter.
// 	        </p>
//         </div>
//         `
//     }
// }
// class PrintNotificade{
//     printiNotificade(invitations) {
//         const body=new BodyNotificades()
//         const list=new ListNotificade()
//         if (invitations.length) {
//             body.bodyNotificade()
//             list.listNotificade(invitations)
//             document.getElementById("start").addEventListener("click", (event) => {
//                 event.preventDefault();
//                 const feedback = new Feedback();
//                 feedback.getFeedback();
//             });
//             document.getElementById("decline").addEventListener("click", (event) => {
//                 event.preventDefault();
//                 storage.removeItem(keyName);
//             });
//         } else {
//             body.bodyNotificade()
//             list.listnone()
//         }

//     }
// }