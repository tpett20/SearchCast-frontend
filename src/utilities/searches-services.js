import * as searchesAPI from './searches-api'

export async function getSearches() {
    try {
        const searchesData = await searchesAPI.index()
        return searchesData
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export async function createSearch(data) {
    try {
        const newSearch = await searchesAPI.create(data)
        return newSearch
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export async function getSearch(id) {
    try {
        const searchData = await searchesAPI.detail(id)
        return searchData
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export async function deleteSearch(id) {
    try {
        const deletedSearch = await searchesAPI.destroy(id)
        return deletedSearch
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}