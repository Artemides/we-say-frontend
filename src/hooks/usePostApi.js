import {useState} from 'react';
import axios from 'axios';
export const usePostApi=(API)=>{
    const [response, setResponse] = useState([]);
    const request = async (payload) => {
        await axios.post(API,payload)
        .then(res=>setResponse(res))
        .catch(error=>console.log(error));
        
    }
    return [response,request];
}