import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../../constants/colors';
import styles from './styles/TileRowStyles';

// components
import Tile from '../atoms/Tile';

const Width = Dimensions.get('window').width;

const getTileStyle = tileSize => {
  return {
    width: tileSize,
    height: tileSize,
    backgroundColor: Colors.lightBrown,
    margin: 2,
    borderRadius: 5,
  };
};

function TileRow(props) {
  const tileSize = Width * 0.8 / props.numTiles - 4;
  const tiles = [];
  for (let i = 0; i < props.numTiles; i += 1) {
    tiles.push(<Tile key={i} style={getTileStyle(tileSize)} />);
  }
  return (
    <Animatable.View
      animation="bounceInDown"
      style={{ ...styles.tileRow, height: tileSize }}
    >
      {tiles}
    </Animatable.View>
  );
}

TileRow.propTypes = {
  numTiles: PropTypes.number.isRequired,
};

export default TileRow;
