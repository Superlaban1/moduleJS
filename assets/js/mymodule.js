async function fetchData(endpoint) {
    const response = await fetch(`https://dummyjson.com${endpoint}`)
    const data = await response.json()

    console.log(data)
    return data
}

export function fetchProducts(limit) {
    return fetchData(`/products?limit=${limit}`)
}

export default function fetchProduct(id) {
    return fetchData(`/products/${id}`)
}

export function fetchCatagories() {
    return fetchData('/products/category-list')
}

export function fetchProductByCatagory(catagory) {
    return fetchData(`/products/category/${catagory}`)
}

export function fetchSearchProduct(search) {
    return fetchData(`/products/search?q=${search}`)
}