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

function Tile(props) {
  return (
    <Animatable.View
      animation="fadeIn"
      style={getTileStyle(props.tileSize)}
      onStartShouldSetResponder={props.onClick}
    />
  );
}

Tile.propTypes = {
  tileSize: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tile;
