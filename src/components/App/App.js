import './App.css';
import { useState, useEffect, useContext } from 'react';
import { SpotifyContext } from '../../data';
import { getSpotifyToken, setSpotifyToken } from '../../utilities/spotifyToken';
import { accessSpotify } from '../../utilities/results-services';

import Header from '../Header';
import Main from '../Main';

function App() {

    const {Provider: SpotifyToken} = SpotifyContext

    const [currentSpotifyToken, setCurrentSpotifyToken] = useState(null)

    const establishSpotifyConnection = async () => {
        const localToken = getSpotifyToken()
        if (localToken) {
            setCurrentSpotifyToken(localToken)
        } else {
            try {
                const newToken = await accessSpotify()
                setCurrentSpotifyToken(newToken)
                setSpotifyToken(newToken)
            } catch (err) {
                console.log(err)
            }
        }
    }

    useEffect(() => {
        establishSpotifyConnection()
    }, [])

    return (
        <div className="App">
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