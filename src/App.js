import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import { Provider } from 'react-redux';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import store from './redux/store';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);


function App() {
  return (
    <Provider store={store}>
      <React.Suspense fallback={loading}>

        <Router>
          <Routes />
        </Router>
      </React.Suspense>
    </Provider>
  );
}

export default App;
