import { Buffer } from "buffer"
import axios from "axios"
import qs from 'qs'

const clientId = process.env.REACT_APP_CLIENT_ID
const clientSecret = process.env.REACT_APP_CLIENT_SECRET
const tokenURL = 'https://accounts.spotify.com/api/token'
const credentials = Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString('base64')
const data = qs.stringify({'grant_type':'client_credentials'})

export async function getSpotifyToken() {
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

// BQDg3JBitIHJgQyMzwioeUwWTa6iSsYH-wVEA7_AAdQ8XY59XL23WMuFlOugqslu0siuKSfKoL22iapdSNqs1SmAPItXgYqpa8H6QiI2YbdPDzZoF_n3