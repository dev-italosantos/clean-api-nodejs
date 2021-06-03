const HttpResponse = require('../helprs/http_response')

module.exports = class LoginRouter {
    route (httpRequest) {
      if (!httpRequest || !httpRequest.body) {
        return HttpResponse.serverError()
      }
      const { email, password } = httpRequest.body
  
      if (!email) {
        return HttpResponse.badRequest('email')
      }
  
      if (!password) {
        return HttpResponse.badRequest('password')
      }
    }
  }