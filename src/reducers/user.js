import { REGISTER_USER, LOGIN_USER } from '../constants/userActions'
export default function userReducer(state = null, action) {
    switch(action.type) {
        case REGISTER_USER:
            if(action.payload.data.token) {
                sessionStorage.setItem("token", action.payload.data.token)
                sessionStorage.setItem("name", action.payload.data.name)
                return true
            } else {
                return false
            }
        case LOGIN_USER:
            if(action.payload.data.token) {
                sessionStorage.setItem("token", action.payload.data.token)
                sessionStorage.setItem("name", action.payload.data.name)
                return true
            } else {
                return false
            }
        default:
    }
    return state
}