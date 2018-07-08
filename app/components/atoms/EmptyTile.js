import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const getTileStyle = tileSize => {
  return {
    width: tileSize,
    height: tileSize,
    margin: 2,
  };
};

function EmptyTile(props) {
  return <View style={getTileStyle(props.tileSize)} valid={false} />;
}

EmptyTile.propTypes = {
  tileSize: PropTypes.number.isRequired,
};

export default EmptyTile;
