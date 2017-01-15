import axios from 'axios'

export function getTest(){
    return(
        axios.get('http://localhost:4000/auth/axiostest')
    )
}

export function signIn(email,password){
    return(
        axios.post(
            'http://localhost:4000/auth/axiostest',
            {
                email: email,
                password: password
            }
        )
        .then( (res) => {
            console.log(res)
        })
        .catch( (e) => {
            console.log(e)
        })
    )
}

