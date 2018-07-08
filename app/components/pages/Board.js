import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import styles from './styles/BoardStyles';

// components
import FadeInView from '../wrappers/FadeInView';
import Tile from '../atoms/Tile';
import Nav from '../molecules/Nav';

class Board extends React.Component {
  render() {
    return (
      <FadeInView style={styles.game}>
        <Nav pageTitle="BOARD" />
        <View style={styles.board}>
          {/* {this.state.board.tiles.map(tile => (
            <Tile key={tile.key} style={{}} onClick={() => {}} />
          ))} */}
        </View>
      </FadeInView>
    );
  }
}

Board.propTypes = {};

Board.defaultProps = {};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
