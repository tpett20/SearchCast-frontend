const getSpotifyToken = () => {
    return localStorage.getItem('spotifyToken')
}

const setSpotifyToken = (token) => {
    return localStorage.setItem('spotifyToken', token)
}

const clearSpotifyToken = () => {
    // for use if no results are populating bc the token is expired
    return localStorage.setItem('spotifyToken', "")
}

export {getSpotifyToken, setSpotifyToken, clearSpotifyToken}