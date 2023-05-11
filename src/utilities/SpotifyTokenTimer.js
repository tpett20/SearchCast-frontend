const checkSpotifyTokenTimer = () => {
    const now = Date.now()
    const timer = localStorage.getItem('spotifyTokenTimer')
    console.log('spotifyTokenTimer', now, timer)
    return timer > now ? true : false
}

const setSpotifyTokenTimer = () => {
    const timer = Date.now() + (3600 * 1000)
    return localStorage.setItem('spotifyTokenTimer', timer)
}

const clearSpotifyTokenTimer = () => {
    return localStorage.setItem('spotifyTokenTimer', 0)
}

export {checkSpotifyTokenTimer, setSpotifyTokenTimer, clearSpotifyTokenTimer}