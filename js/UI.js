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

    mostrarMenuCambiarContraseña(){

        let menu = document.getElementById('row-form-password');
        let menuInvite = document.getElementById('row-form-invite-feedback');

        menu.style.display = 'none';
        menuInvite.style.display = 'none';

        if(menu != null){
            document.getElementById('change-password').addEventListener('click', (even) =>{

                switch (menu.style.display) {
                    case 'none':
                        menu.style.display = 'block';
                        menuInvite.style.display = 'none'
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

    mostrarMenuInvitaFeedBack(){

        let menu = document.getElementById('row-form-invite-feedback');
        let menuPass = document.getElementById('row-form-password');

        menu.style.display = 'none';
        menuPass.style.display = 'none';

        if(menu != null){
            document.getElementById('invite').addEventListener('click', (even) =>{

                switch (menu.style.display) {
                    case 'none':
                        menu.style.display = 'block';
                        menuPass.style.display = 'none';
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

}