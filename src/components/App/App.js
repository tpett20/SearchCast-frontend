import './App.css';
import { useState, useEffect, useContext } from 'react';
import { SpotifyContext } from '../../data';
import { getSpotifyToken, setSpotifyToken, clearSpotifyToken } from '../../utilities/spotifyToken';
import { setSpotifyTokenTimer, checkSpotifyTokenTimer, clearSpotifyTokenTimer } from '../../utilities/SpotifyTokenTimer';
import { accessSpotify } from '../../utilities/results-services';

import Header from '../Header';
import Main from '../Main';

function App() {

    const {Provider: SpotifyToken} = SpotifyContext

    const [currentSpotifyToken, setCurrentSpotifyToken] = useState(null)

    const establishSpotifyConnection = async () => {
        const localToken = getSpotifyToken()
        const timerStatus = checkSpotifyTokenTimer()
        if (localToken && timerStatus) {
            setCurrentSpotifyToken(localToken)
        } 
        else if (localToken) {
            // localToken exists, but timer has expired
            console.log('hitting expired timer')
            clearSpotifyToken()
            clearSpotifyTokenTimer()
            try {
                const newToken = await accessSpotify()
                setSpotifyToken(newToken)
                setSpotifyTokenTimer()
            } catch (err) {
                console.log(err)
            }
        }
        else {
            // no localToken exists
            try {
                const newToken = await accessSpotify()
                setCurrentSpotifyToken(newToken)
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
            <SpotifyToken value={{
                currentSpotifyToken, 
                setCurrentSpotifyToken
            }}>
                <Header />
                <Main />
            </SpotifyToken>
        </div>
    );
}

export default App;