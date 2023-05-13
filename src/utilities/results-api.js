import { Buffer } from "buffer"
import axios from "axios"
import qs from 'qs'
import { getSpotifyToken } from "./spotifyToken"
import { cleanResults, convertInput } from "./spotifyResults"

export async function requestSpotifyToken() {

    const clientId = process.env.REACT_APP_CLIENT_ID
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET
    const tokenURL = 'https://accounts.spotify.com/api/token'
    const credentials = Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString('base64')
    const data = qs.stringify({'grant_type':'client_credentials'})

    try {
        const response = await axios.post(tokenURL, data, {
            headers: {
                "Authorization": `Basic ${credentials}`,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        console.log(response.data.access_token)
        return response.data.access_token
    } catch (err) {
        console.log(err)
    }
}
// Code Assistance: https://ritvikbiswas.medium.com/connecting-to-the-spotify-api-using-node-js-and-axios-client-credentials-flow-c769e2bee818

export async function searchSpotifyAPI(input) {

    const convertedInput = convertInput(input)
    const spotifyToken = getSpotifyToken()
    console.log('Search Spotify - Token', spotifyToken)
    const apiURL = `https://api.spotify.com/v1/search?q=${convertedInput}&type=episode&market=US&limit=30`

    try {
        const response = await axios.get(apiURL, {
            headers: {
                'Authorization': `Bearer ${spotifyToken}`
            }
        })
        const data = response.data.episodes.items
        return cleanResults(data, input)
    } catch (err) {
        console.log(err)
    }
}