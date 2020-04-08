import  LOGIN from './types'
import  LOGIN_SUCCESS from './types'
import  LOGIN_FAILED from './types'


export const loginUser = ({ email, password }) => {
    console.log( email, password, ' email, password')
    return (dispatch) => {
        dispatch({ type: LOGIN });
        // apiService({ email, password }).then(()=> dispatch({ type: LOGIN_SUCCESS, payload: 'Response' }) )
    }
}