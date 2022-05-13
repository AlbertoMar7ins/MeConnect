import { RequestAPI } from '../core'

class UserModel {
    constructor(userType) {
        this.endpoint = `/users/${userType}`
    }

    static allUsers() {
        return RequestAPI({
            route: '/users',
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })
    }

    async create(params) {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
            params
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

export default UserModel