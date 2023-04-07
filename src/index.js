import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/vapor/bootstrap.min.css';
import './style/index.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux'
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);