import axiosClient from "./axiosClient";

const ContentAPI = {
    getAll: (params) => {
        const url = '/info';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/info/${id}`;
        return axiosClient.get(url);
    },
}

export default ContentAPI;