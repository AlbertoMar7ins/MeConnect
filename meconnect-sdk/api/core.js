import config from './config'

export async function RequestAPI({ route = '', method = 'GET', params }) {
    try {
        const url = `${config.baseURL}${route}?${getParamsString(params)}`
        const res = await fetch(url, { method })
        const json = await res.json()
        return json
    } catch (e) {
        alert(e)
    }
}

function getParamsString(params) {
    return Object.keys(params)
        .map(key => {
            let param = params[key]
            if(Array.isArray(param)) {
                param = param.join(',')
            }
            return [key, param]
        })
        .map(([key, value]) => `${key}=${value}`)
        .join('&')
}