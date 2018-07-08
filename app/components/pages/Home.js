import React from 'react';
import { Font } from 'expo';
import GameMaster from './GameMaster';

const NukamisoLite = require('../../assets/fonts/NukamisoLite.ttf');
const MontserratBold = require('../../assets/fonts/Montserrat-Bold.ttf');
const MontserratRegular = require('../../assets/fonts/Montserrat-Regular.ttf');

// loading static assets
class Home extends React.Component {
  static async loadFonts() {
    await Font.loadAsync({ NukamisoLite });
    await Font.loadAsync({ MontserratBold });
    await Font.loadAsync({ MontserratRegular });
  }

  state = {
    loaded: false,
  };

  async componentWillMount() {
    await Home.loadFonts();
    this.setState({ loaded: true });
  }

  render() {
    return this.state.loaded && <GameMaster />;
  }
}

export default Home;
