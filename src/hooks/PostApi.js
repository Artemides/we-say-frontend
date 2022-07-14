import {useState} from 'react';
import axios from 'axios';
const usePostApi=(API,payload)=>{
    const [data, setData] = useState([]);


    const getResponse = async () => {
        const response=await axios.post(API,payload)
                        .catch(error=>console.log(error));
        console.log(response);
    }
    return [data,getResponse];
}