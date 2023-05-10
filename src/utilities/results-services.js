import * as resultsAPI from './results-api'

export async function accessSpotify() {
    try {
        const spotifyToken = await resultsAPI.getSpotifyToken()
        return spotifyToken
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}