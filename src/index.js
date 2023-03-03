import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import blue from "@material-ui/core/colors";
// import pink from "@material-ui/core/colors";
import MainRouter from './Routes/MainRouter';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { CssVarsProvider } from '@mui/joy';

// const theme = createMuiTheme({
//   palette: {
//     primary: blue,
//     secondary: pink
//   },
//   status: {
//     danger: "orange"
//   },
//   typography: {
//     // Use the system font instead of the default Roboto font.
//     fontFamily: ["calibri"].join(","),
//     fontSize: 16
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MuiThemeProvider theme={theme}> */}
      <Provider store={store}>
    {/* <CssVarsProvider>2 */}
        <MainRouter>
          <App />
        </MainRouter>
    {/* </CssVarsProvider>2 */}
      </Provider>
    {/* </MuiThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
