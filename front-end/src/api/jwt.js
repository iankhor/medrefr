const localStorageKey = 'token'

export function readToken() {
    try {
        return localStorage.getItem(localStorageKey)
    }
    catch (error) {
        console.error('Error reading token', error)
        return null
    }
}

export function writeToken(token) {
    console.log('Saved token', token)
    localStorage.setItem(localStorageKey, token);
}
