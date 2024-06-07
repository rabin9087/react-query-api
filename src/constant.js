import axios from "axios";

const url = "https://fakestoreapi.com/products"

export const axiosInstance = axios.create({
    baseURL: url,
    headers: { "Content-type": "application/json; charset = UTF-8" }
})

export const getData = async () => {

    const resp = await axiosInstance.get("/")
    return resp?.data
}

export const getAData = async (id) => {
    const { data } = await axiosInstance.get("/" + `${id}`)

    return data
}

export const postNewData = async (data) => {

    const resp = await axiosInstance.post("/", {
        data: JSON.stringify(data),
    })

    return resp?.data

}

export const postAData = async (data) => {
    const resp = await axiosInstance.post("/", data)

    return resp?.data

}