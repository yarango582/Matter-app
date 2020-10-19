import obtainUser from './User.js'

export default class Invitated {

    obtainUserStorage() {

        const User = new obtainUser;
        let storage = User.obtainUser();

        storage.email_verified_at = ["goku", "felipe"]
        
        console.log(storage)

        // storage.email_verified_at[0] = "mauricio"
        // console.log(storage.email_verified_at)

    }
    

}