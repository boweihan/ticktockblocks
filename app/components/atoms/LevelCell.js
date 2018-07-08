import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/LevelCellStyles';

class LevelCell extends React.PureComponent {
  render() {
    return (
      <View style={styles.cell}>
        <Text>Level Cell</Text>
      </View>
    );
  }
}

LevelCell.propTypes = {};

export default LevelCell;
