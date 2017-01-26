import AuthService from './AuthService'

const auth = new AuthService(process.env.REACT_APP_AUTH_CLIENT_ID, process.env.REACT_APP_AUTH_DOMAIN_ADDRESS)

export default auth