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