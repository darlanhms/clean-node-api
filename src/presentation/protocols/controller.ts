import { HttpRequest, HttpResponse } from './http'

export default interface Controller {
  handle: (request: HttpRequest) => HttpResponse
}
