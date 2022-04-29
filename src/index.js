import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//Import Css
import './style/animate.css';
import './style/bootstrap.min.css';
 import './style/bootstrap.min.css.map';
 import './style/flaticon.css';
import './style/lightcase.css';
import './style/owl.carousel.min.css';
import './style/owl.theme.default.min.css';
import './style/pe-icon-7-stroke.css';
import './style/preset.css';
import './style/responsive.css';
import './style/settings.css';
import './style/theme.css';
import './style/themewar-icons.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
