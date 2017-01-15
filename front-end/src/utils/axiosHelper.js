import axios from 'axios'

export function getTest(){
    return(
        axios.get('http://localhost:4000/auth/axiostest')
    )
}

export function signIn(req){
    return(
        axios.post(
            'http://localhost:4000/auth/signin',
            req
        )
        .then( (res) => {
            console.log(res)
        })
        .catch( (e) => {
            console.log(e)
        }
        
        )
        // console.log('axios', req)
    )
}

