import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux';
import store from './stores';

// import css
import './index.css';

// import component
import App from './App';

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        document.getElementById('root'),
    )
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        render(App)
    })
}

registerServiceWorker();
