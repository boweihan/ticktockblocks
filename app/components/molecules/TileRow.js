import React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import styles from './styles/TileRowStyles';

function TileRow(props) {
  return (
    <Animatable.View style={{ ...styles.tileRow, height: props.tileSize }}>
      {props.children}
    </Animatable.View>
  );
}

TileRow.propTypes = {
  children: PropTypes.array.isRequired,
  tileSize: PropTypes.number.isRequired,
};

export default TileRow;
