/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const baseUrl = 'https://rvh98qbf-44321.brs.devtunnels.ms';
const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const action = (actionCode: string)  => {
    return apiClient.get<any>(`/Share/${actionCode}`);
 }