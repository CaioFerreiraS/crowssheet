
	CourseController = require("@modules/course/controller")
	controller = new CourseController
	validator = require("./validator")

	module.exports = [
		{
			method: 'POST', 
			path: '/course/save', 
			handler: controller.store,
			config: {
				validate: validator.course
			}
		},
		{method: 'POST', path: '/course/delete', handler: controller.delete},
		{method: 'POST', path: '/course/update', handler: controller.update},
		{method: 'GET',	path: '/course/{id}', handler: controller.getSingle},
		{method: 'GET', path: '/json/course/all', handler: controller.getAll}
	]
