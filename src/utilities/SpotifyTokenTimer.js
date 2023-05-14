const checkSpotifyTokenTimer = () => {
    const now = Date.now()
    const timer = localStorage.getItem('spotifyTokenTimer')
    return timer > now ? true : false
}

const setSpotifyTokenTimer = () => {
    // the Spotify access token is valid for 3600 seconds (1 hour)
    // 3600 * 1000 converts the time to milliseconds
    const timer = Date.now() + (3600 * 1000)
    return localStorage.setItem('spotifyTokenTimer', timer)
}

const clearSpotifyTokenTimer = () => {
    return localStorage.setItem('spotifyTokenTimer', 0)
}

export { checkSpotifyTokenTimer, setSpotifyTokenTimer, clearSpotifyTokenTimer }