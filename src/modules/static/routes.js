

module.exports = ( controller ) => {
    PostController = require("@modules/static/controller")
	controller = controller || new PostController
    return [
        {method: 'GET', path: '/boletim', handler: controller.showProgramming }
        ]
}