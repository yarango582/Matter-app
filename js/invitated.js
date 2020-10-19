import obtainUser from './User.js'
import searchUserfeedback from './User.js'

export default class Invitated {

    obtainUserStorage() {

        // const User = new obtainUser;
        // let storage = User.obtainUser();


        // console.log(storage)

    }

    getUsers() {

        const user = new searchUserfeedback;

        const requestUrl = "https://matter-app.herokuapp.com/api/v1/users";
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        }
        fetch(requestUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
            const User = new obtainUser;
            let storage = User.obtainUser();
            // console.log(storage)

            let feedback = user.searchUserfeedback(data)
            // console.log(feedback);

            if (feedback.email_verified_at === null) {
                feedback.email_verified_at = [storage.id]
            }

            else {
                feedback.email_verified_at.push() = [storage.id]
            }

            console.log(feedback);


        })

        
    }
    

}