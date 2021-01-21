import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import {DeviceContext} from "./context/deviceContext"

import './App.css';
import store from "./state/store";
import Header from "./componenets/comon/header";
import Footer from "./componenets/comon/footer";
import Devices from "./componenets/pages/Devices"
import Device from "./componenets/pages/Device"

function App() {
    return (
    <div className="App">
        <Header/>
            <Router>
                <DeviceContext.Provider value={store}>
                <Route path='/' exact component={Devices}/>
                <Route path='/devices/:key' exact component={Device}/>
                </DeviceContext.Provider>
            </Router>
        <Footer/>


    </div>
  );
}

export default App;
