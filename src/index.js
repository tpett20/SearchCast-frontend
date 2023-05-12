import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain='dev-6se1k1awr6ey8y3e.us.auth0.com'
        clientId='HCsuJIShMOLMBpBf2FAu8Sd8WDM6RPdP'
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <Router>
            <App />
        </Router>
    </Auth0Provider>
)