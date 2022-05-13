const baseURL = 'https://meconnect-api.herokuapp.com/api'

export async function RequestAPI({ route = '', method = 'GET', params }) {
    try {
        const url = `${baseURL}${route}?${getParamsString(params)}`
        const res = await fetch(url, { method })
        const json = await res.json()
        return json
    } catch (e) {
        alert(e)
    }
}

function getParamsString(params) {
    return Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&')
}