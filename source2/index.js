import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import './resources/styles/microsoft-oem-doc-styles.scss';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { getStore } from './store';
import { initializeIcons } from '@uifabric/icons';
import {IntlProvider} from "react-intl";
import {localizationData} from './localizationData';

initializeIcons();

const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

// Split locales with a region code
const languageCode = language && language.toLowerCase().split(/[_-]+/)[0];
const messages = localizationData[languageCode] || localizationData[language] || localizationData.en;

const store = getStore();
ReactDOM.render((
        <Provider store={store}>
            <IntlProvider locale={languageCode} messages={messages}>
                <App/>
            </IntlProvider>
        </Provider>
    ), document.getElementById('root'));
registerServiceWorker();
