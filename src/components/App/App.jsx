import './App.css';
import { useEffect } from 'react';
import { getSpotifyToken, setSpotifyToken } from '../../utilities/spotifyToken';
import { setSpotifyTokenTimer, checkSpotifyTokenTimer } from '../../utilities/SpotifyTokenTimer';
import { accessSpotify } from '../../utilities/results-services';

import Header from '../Header';
import Main from '../Main';

function App() {

    const establishSpotifyConnection = async () => {
        const localToken = getSpotifyToken()
        const timerStatus = checkSpotifyTokenTimer()
        if (!localToken || !timerStatus) {
            // localToken exists or timer has expired
            try {
                const newToken = await accessSpotify()
                setSpotifyToken(newToken)
                setSpotifyTokenTimer()
            } catch (err) {
                console.log(err)
            }
        }
    }

    useEffect(() => {
        establishSpotifyConnection()
    }, [])

    return (
        <div className="App container">
            <Header />
            <Main />
        </div>
    );
}

export default App;