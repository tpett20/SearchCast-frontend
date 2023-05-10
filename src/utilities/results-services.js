import * as resultsAPI from './results-api'

export async function accessSpotify() {
    try {
        const spotifyToken = await resultsAPI.requestSpotifyToken()
        return spotifyToken
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

export async function searchSpotify(input) {
    try {
        // const data = await resultsAPI.searchSpotifyAPI(input)
        const data = await fetch('../sampleData.json').then(response => response.json())
        return data
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}