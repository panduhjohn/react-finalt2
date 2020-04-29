import React, { Component } from 'react';

import Beers from './Beers';
import Header from './Header';

class App extends Component {
    constructor() {
        super();
        this.state = {
            beers: [],
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Beers />
            </div>
        );
    }
}

export default App;
