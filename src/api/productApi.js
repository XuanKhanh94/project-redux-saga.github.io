import axiosClient from "./axiosClient";

const ProductApi = {
    getAll: (params) => {
        const url = '/info';
        return axiosClient.get(url, {
            baseURL: 'https://62b67dc76999cce2e8034ae4.mockapi.io/',
            params: {

            }
        });
    },
    get: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    }
}

export default ProductApi;