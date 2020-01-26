import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./players/Index";
import Player from "./players/Player";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/players/:id' component={Player}/>
                <Route path='/' component={Index}/>
            </Switch>
        </div>
    );
}

export default App;
