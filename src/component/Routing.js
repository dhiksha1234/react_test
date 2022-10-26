import React from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import Shoe from './shoe'
import Glass from './glass'
import Header from './header'
import Bag from './bag'

const Routing = () => {
    return(
        <BrowserRouter>
    
            <Header/>
            <div className="container">
                {/* <Route exact path="/" component={Shoe}></Route> */}
                <Route exact path="/shoe" component={Shoe}></Route>
                <Route exact path="/glass" component={Glass}></Route>
                <Route exact path="/bag" component={Bag}></Route>
            </div>
        
        </BrowserRouter>
    )
}

export default Routing