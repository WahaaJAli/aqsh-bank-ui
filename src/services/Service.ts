import api from './api'

class Service {
  constructor(public endPoint: string) { }

  get<I>(params?: Record<string, any>) {
    return api.get<I>(this.endPoint, { params })
  }

  getById<I>(id: string) {
    return api.get<I>(`${this.endPoint}/${id}`)
  }

  create<I>(entity: I) {
    return api.post<I>(this.endPoint, entity)
  }

  update<I>(id: string, entity: I) {
    return api.put<I>(`${this.endPoint}/${id}`, entity)
  }

  delete<I>(id: string) {
    return api.delete<I>(`${this.endPoint}/${id}`)
  }
}

const create = (endPoint: string) => new Service(endPoint)
export default create