import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

function Tile(props) {
  return (
    <Animatable.View animation="fadeIn" style={props.style}>
      <Animated.View onStartShouldSetResponder={props.onClick} />
    </Animatable.View>
  );
}

Tile.propTypes = {
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tile;
