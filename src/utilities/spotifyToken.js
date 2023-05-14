const getSpotifyToken = () => {
    return localStorage.getItem('spotifyToken')
}

const setSpotifyToken = (token) => {
    return localStorage.setItem('spotifyToken', token)
}

const clearSpotifyToken = () => {
    return localStorage.setItem('spotifyToken', "")
}

export { getSpotifyToken, setSpotifyToken, clearSpotifyToken }