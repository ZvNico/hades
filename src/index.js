import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter as Router} from "react-router-dom";
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Router>
                        <App/>
                    </Router>
                </Provider>
            </ThemeProvider>
        </CssBaseline>
    </React.StrictMode>
);

reportWebVitals();
