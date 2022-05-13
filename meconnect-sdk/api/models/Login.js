import { RequestAPI } from '../core'

export default function login(name, email, password) {
    return RequestAPI({
        route: '/login',
        method: 'POST',
        params: { name, email, password }
    })
}