import api from "./api"

class Service {
    controller = new AbortController()
    constructor(public endPoint: string) {}

    get<I>() {
        const request = api.get<I[]>(this.endPoint, { signal: this.controller.signal })
        return { request, cancel: () => this.controller.abort() }
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