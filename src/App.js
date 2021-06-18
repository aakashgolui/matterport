import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);


function App() {
  return (
    <React.Suspense fallback={loading}>
      <Router>
        <Routes />
      </Router>
    </React.Suspense>
  );
}

export default App;
