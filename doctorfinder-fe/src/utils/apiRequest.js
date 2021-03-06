import axios from "axios";

const API = "http://localhost:3001"

export const request = (url, method, payload = {}) => {
    return axios({
        method: method,
        url: `${API}${url}`,
        data: payload,
    });
};

export const DOCTORS_API = "/doctor";

export const MASTER_SPECIALTY_API = "/master/specialty";
export const MASTER_CITY_API = "/master/city";

export const LOGIN_API = "/login";
