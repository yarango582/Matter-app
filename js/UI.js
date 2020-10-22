export default class UI {

    mostrarMenuProfile(){

        let menu = document.getElementById('profile-row');
        menu.style.display = 'none';

        if(menu != null){
            document.getElementById('button-profile').addEventListener('click', (even) =>{

                switch (menu.style.display) {
                    case 'none':
                        menu.style.display = 'block';
                        break;
                    case 'block':
                        menu.style.display = 'none';
                        break;
                    default:
                        console.log('Error revisa el codigo');
                        break;
                }                
            })     
        }
    }

    informationUser() {
        const informationUser = document.getElementById('section-information')
        const usersFromStorage = localStorage.getItem('user');
        const user = JSON.parse(usersFromStorage);
        informationUser.innerHTML = `<div class="container mt-5">
                                <div class="row text-center row-form-invite-feedback" id="row-form-invite-feedback">
                                    <div class="col-md-12">
                                        <div class="card">
                                            <div class="card-title mt-3">
                                                <h3>${user.name}</h3>
                                            </div>
                                            <div class="card-body">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`
    }
}

