import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import SignIn from './pages/sign-in';
import UserDashboard from './pages/user-dashboard';
import Dashboard from './pages/dashboard';
import './App.scss';
import 'antd/dist/antd.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0da2d8',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ec6c5c',
      contrastText: '#fff'
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route exact path="/" render={() => <Redirect to="/sign-in" />} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/user-dashboard" component={UserDashboard} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
