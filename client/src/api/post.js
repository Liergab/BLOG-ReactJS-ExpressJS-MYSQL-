import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { useLocation } from "react-router-dom";
import { QUERY_KEYS } from "./queryKey";

const USERS_URL = '/v1/api';



export const useGetAllPost = () => {
    const cat = useLocation().search
    return useQuery({
        queryKey:[QUERY_KEYS.GET_ALL_POST, cat],
        queryFn: async() => {
            const response = await axios.get(`${USERS_URL}/post${cat}`);
            return response.data
        }
    })
}

export const useGetPostById = (id) => {
    return useQuery({
        queryKey:[QUERY_KEYS.GET_POST_BY_ID,id],
        queryFn: async() => {
            const response = await axios.get(`${USERS_URL}/post/${id}`);
            return response.data
        }
    })
}

export const  useDeletePost = async(id) => {
    await axios.delete(`${USERS_URL}/post/${id}`)
}

export const useCreatePost = async(formdata) => {
    const response = await axios.post(`${USERS_URL}/post`, formdata, {
        headers:{
            'Content-Type':'multipart/form-data'
        },
        body: JSON.stringify(formdata)
    })

    return response.data
}

export const useUpdatePost = async(formdata) => {
    const response = await axios.put(`${USERS_URL}/post/${formdata?.id}`, formdata, {
        headers:{
            'Content-Type':'multipart/form-data'
        },
        body: JSON.stringify(formdata)
    })

    return response.data
}
