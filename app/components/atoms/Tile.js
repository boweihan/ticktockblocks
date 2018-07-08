import React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import Colors from '../../constants/colors';

const getTileStyle = tileSize => {
  return {
    width: tileSize,
    height: tileSize,
    backgroundColor: Colors.lightBrown,
    margin: 2,
    borderRadius: 5,
  };
};

class Tile extends React.PureComponent {
  timer: null;

  handleStartPress = onClick => {
    this.timer = setTimeout(() => onClick(), 500);
  };

  handleEndPress = () => {
    clearTimeout(this.timer);
  };

  render() {
    return (
      <Animatable.View
        animation="bounceInDown"
        duration={1000}
        style={getTileStyle(this.props.tileSize)}
        onTouchStart={() => this.handleStartPress(this.props.onClick)}
        onTouchEnd={this.handleEndPress}
      />
    );
  }
}

Tile.propTypes = {
  tileSize: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tile;
