import AXIOS from './index'

const url = '/shop'

export const getTopicsProduct = async () => {
    try {
        const res = await AXIOS.get(`/product/topics`)
        return res.data
    } catch (error) {
        return error
    }
}

export const getProductAll = async (payload: any) => {
    try {
        const res = await AXIOS.get(`/product/topic/${payload}`)
        return res.data
    } catch (error) {
        return error
    }
}

export const getProductByCategory = async (payload: any) => {
    try {
        const res = await AXIOS.get(`${url}/getProductsByCategoryID/${payload}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const getAttributeByCategory = async (payload: any) => {
    try {
        const res = await AXIOS.get(`${url}/getAttributeByCategoryID/${payload}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const getProductsWithFilter = async (payload: any) => {
    try {
        const res = await AXIOS.get(`${url}/getProductsWithFilter/${payload}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res.data
    } catch (error) {
        return error
    }
}

export const searchProduct = async (payload: any) => {
    try {
        const res = await AXIOS.get(`${url}/search/${payload}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res.data
    } catch (error) {
        return error
    }
}

export const getCategories = async () => {
    try {
        const res = await AXIOS.get(`category/all`);
        return res.data
    } catch (error) {
        return error;
    }
}