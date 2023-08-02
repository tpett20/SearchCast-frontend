import './App.css';
import { useState, useEffect } from 'react';
import { getSpotifyToken, setSpotifyToken } from '../../utilities/spotifyToken';
import { setSpotifyTokenTimer, checkSpotifyTokenTimer } from '../../utilities/SpotifyTokenTimer';
import { accessSpotify } from '../../utilities/results-services';

import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {

    const [connectionLoading, setConnectionLoading] = useState(true)

    const establishSpotifyConnection = async () => {
        const localToken = getSpotifyToken()
        const timerStatus = checkSpotifyTokenTimer()
        // if there's no localToken or timer has expired
        if (!localToken || !timerStatus) {
            try {
                const newToken = await accessSpotify()
                setSpotifyToken(newToken)
                setSpotifyTokenTimer()
                setConnectionLoading(false)
            } catch (err) {
                console.log(err)
            }
        } else {
            setConnectionLoading(false)
        }
    }

    useEffect(() => {
        establishSpotifyConnection()
    }, [])

    return connectionLoading ? <></> : (
        <div className="App container">
            <Header />
            <Main />
        </div>
    );
}

export default App;