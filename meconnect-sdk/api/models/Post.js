import { RequestAPI } from '../core'

class PostModel {
    constructor() {
        this.endpoint = '/posts'
    }

    async create(company_id, title, content, post_type, tags) {
        return RequestAPI({
            route: this.endpoint,
            method: 'POST',
            params: { company_id, title, content, post_type, tags }
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

export default PostModel