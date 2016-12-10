let request = require("request")
let firebase = require('firebase')
let config = require('@config/database')
let gcloud = require('gcloud')({
  projectId: 'blog-9d0bc'
})
const firebaseApp = firebase.initializeApp(config)

class Firebase {
    
	constructor() {
		this._firebase = firebaseApp
		this.cloud = gcloud
	}

    get database () {
        return this._firebase.database()
    }

    get auth () {
        return this._firebase.auth()
    }
}
module.exports = Firebase