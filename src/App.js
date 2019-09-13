import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './App.css';

export default class App extends Component{
  render(){
    return(
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="Landing-grid">
          <Cell col={12}>

          </Cell>
        </Grid>
      </div>
    )
  }
}
