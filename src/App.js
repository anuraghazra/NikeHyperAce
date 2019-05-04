import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Popup from './components/UI/Popup';

import AppWrapper from './components/UI/AppWrapper';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Feature from './components/Feature/Feature';
import Branding from './components/Branding/Branding';
import Ambassadors from './components/Ambassadors/Ambassadors';
import Footer from './components/Footer/Footer';

const theme = {
  primaryColor: '#FF9F47',
  secondaryColor: '#FF6320',
  primaryText: '#3D3D3D',
  gradient: 'linear-gradient(258deg, #FF9F47 4.95%, #FF6320 92.99%)',
  gradientNeg: 'linear-gradient(-258deg, #FF9F47 4.95%, #FF6320 92.99%)',
  contentMargin: '200px 0'
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
   
          <Navbar />
          <Intro />
          <Feature />
          <Branding />
          <Ambassadors />
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
