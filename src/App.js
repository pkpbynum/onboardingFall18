import React, { Component } from "react";
import Todos from './components/Todos/index'
import { ThemeProvider } from 'styled-components';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Todos></Todos>
      </ThemeProvider>
    )
  }
}

export default App;
