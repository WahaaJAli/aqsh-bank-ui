import api from './api'

class Service<T> {
  constructor(public endPoint: string) { }

  get = async <I>(params?: Record<string, any>) => {
    return (await api.get<I>(this.endPoint, { params })).data
  }

  getById = async (id: string) => {
    return (await api.get<T>(`${this.endPoint}/${id}`)).data
  }

  create = async (entity: T) => {
    return (await api.post<T>(this.endPoint, entity)).data
  }

  update = (id: string, entity: T) => {
    return api.put<T>(`${this.endPoint}/${id}`, entity)
  }

  delete = (id: string) => {
    return api.delete<T>(`${this.endPoint}/${id}`)
  }
}

export default Service