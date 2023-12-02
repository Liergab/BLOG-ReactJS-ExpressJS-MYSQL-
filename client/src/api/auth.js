import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const USERS_URL = '/v1/api/auth';
export const useRegisterApi = async(userData) => {
        await axios.post(`${USERS_URL}/register`, userData, {
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(userData)
    });
}

export const useLoginApi = async(userData) => {
  const response =   await axios.post(`${USERS_URL}/login`, userData, {
    headers:{
        'content-type' : 'application/json'
    },
    body: JSON.stringify(userData)
});
return response.data
}

export const useLogoutApi = async() => {
   await axios.post(`${USERS_URL}/logout`)
   
}

