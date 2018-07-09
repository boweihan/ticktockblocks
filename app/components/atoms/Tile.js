import React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

const getTileStyle = (tileSize, type) => {
  return {
    width: tileSize,
    height: tileSize,
    backgroundColor: type.color,
    margin: 2,
    borderRadius: 5,
  };
};

class Tile extends React.PureComponent {
  timer: null;

  handleStartPress = onClick => {
    this.timer = setTimeout(() => onClick(this.props.type), 0);
  };

  handleEndPress = () => {
    clearTimeout(this.timer);
  };

  render() {
    return (
      <Animatable.View
        animation="bounceInDown"
        duration={1000}
        style={getTileStyle(this.props.tileSize, this.props.type)}
        onTouchStart={() => this.handleStartPress(this.props.onClick)}
        onTouchEnd={this.handleEndPress}
      />
    );
  }
}

Tile.propTypes = {
  type: PropTypes.object.isRequired,
  tileSize: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tile;
