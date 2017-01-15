import axios from 'axios'

export default function getTest(){
    return(
        axios.get('http://localhost:4000/auth/axiostest')
    )
}

