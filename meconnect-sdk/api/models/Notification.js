import { RequestAPI } from '../core'

class NotificationModel {
    constructor() {
        this.endpoint = '/notifications'
    }

    async create(client_id, company_id) {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
            params: { client_id, company_id }
        })
    }

    async get(id, token) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })
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

    async update(id, params, token) {
        return RequestAPI({
            route: `${this.endpoint}/${id}`,
            method: 'PUT',
            params,
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

export default NotificationModel