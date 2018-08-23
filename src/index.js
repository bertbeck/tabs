import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import FontFaceObserver from 'fontfaceobserver';
import './styles/theme.scss';


const openSansObserver = new FontFaceObserver('Open Sans', {});

openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});


const theme = createMuiTheme({
  typography: {
    fontSize:20
  },
  palette: {
    primary: {
      //light: '#7986CB',
      light: '#ffffff',
      main: '#3949AB',
      dark: '#1A237E',
      //contrastText: '#eecf8f',
    },
    secondary: {
      light: '#999999',
      main: '#10234f',
      dark: '#1f1311',
      contrastText: '#eecf8f',
    },
    appBar: {
      color: 'primary'
    }
  }
});



ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <App />
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
