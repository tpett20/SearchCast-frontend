const getSpotifyToken = () => {
    return localStorage.getItem('spotifyToken')
}

const setSpotifyToken = (token) => {
    return localStorage.setItem('spotifyToken', token)
}

export { getSpotifyToken, setSpotifyToken }