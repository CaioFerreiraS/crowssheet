let Injector = require('@middleware/injector')

module.exports = (request, reply)=> {
    if(request.response.variety === "view") {
    
        if (request.response.source && request.response.source.context) {
            request.response.source.context.state = '<script> window.__INITIAL_STATE__ = ' + JSON.stringify(request.session) + '; </script>'
        }
    }
    reply.continue()
}