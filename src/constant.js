import axios from "axios";

export const axiosHelper = async ({ method, url, ...rest }) => {
    try {
        const resp = await axios({ method, url, rest });
        return resp.data;
    } catch (error) {
        console.log(error.message)
    }
};

const url = "https://fakestoreapi.com/products/"

export const getData = {
    method: "GET",
    url,
}

export const getAData = (id) => {
    return {
        method: "GET",
        url: url + `${id}`
    }
}

export const postAData = (data) => {
    console.log(data)
    return {
        method: "POST",
        url,
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset = UTF-8" }
    }

}

export const postNewData = (data) => {
    return (fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset = UTF-8" },
    }))
}