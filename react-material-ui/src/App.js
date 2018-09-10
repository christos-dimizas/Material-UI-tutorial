import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import GridList from './components/GridList';
class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Grid />
                <GridList />
            </div>
        )
    }
}
export default App;
