import { useState, useEffect } from 'react'
import axios from 'axios'

let api = axios.create({
    headers: {
        'Client-ID': 'o9niu46gyyd2j1f5siryn4v1act3hv' 
    }
});

export default function useAuth(code) {

    useEffect(() => {
        axios
            .post("http://localhost:3001/login", {
                code,
            })
            .then( res => {
                console.log(res.data)
            })
    }, [code])
}

//export default api;