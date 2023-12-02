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