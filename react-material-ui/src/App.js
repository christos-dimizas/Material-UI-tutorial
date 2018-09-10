import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import GridList from './components/GridList';
import Tabs from './components/Tabs';
class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Grid />
                <GridList />
                <Tabs />
            </div>
        )
    }
}
export default App;
