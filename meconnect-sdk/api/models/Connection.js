import { RequestAPI } from '../core'

class ConnectionModel {
    constructor() {
        this.endpoint = '/connections'
    }

    async all(token) {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
            headers: {
                'Authorization': token
            }
        })
    }

    async delete(id, token) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'DELETE',
            headers: {
                'Authorization': token
            }
        })
    }
}

export default ConnectionModel