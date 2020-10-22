import User from './User.js';
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

        menu.style.display = 'none';

        if(menu != null){
            document.getElementById('change-password').addEventListener('click', (even) =>{
                const user = new User;
                let storageUser = user.obtainUser();
                document.getElementById("name-user").value = storageUser.name;

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


}