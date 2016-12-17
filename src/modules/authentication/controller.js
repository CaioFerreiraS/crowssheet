let AuthService = require('@modules/authentication/service')

class AuthController {

	index(request, reply) {
		reply.view('pages/login')
	}

	register(request, reply) {
		reply.view('pages/singup')
	}

	singin(request, reply) {
		let service = new AuthService()
		console.log(service.login(request.payload.email, request.payload.password));
		if(service.login(request.payload.email, request.payload.password)) {
			reply.view('pages/dashboard')
		} else {
			reply.view('pages/home')
		}
	}

	singup(request, reply) {
		let service = new AuthService()
		if( request.payload.password == request.payload.passwordAgain ) {
			if(service.singup( request.payload.email, request.payload.password)) {
				reply.view('pages/dashboard')
			} else {
				reply.view('pages/home')
			}
		}
		return false
	}
}
module.exports = AuthController
