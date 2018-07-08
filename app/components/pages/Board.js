import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import styles from './styles/BoardStyles';

// components
import BoardStruct from '../../structs/BoardStruct';
import FadeInView from '../wrappers/FadeInView';
import Nav from '../molecules/Nav';
import Tile from '../atoms/Tile';
import TileRow from '../molecules/TileRow';

class Board extends React.Component {
  state = {
    boardStruct: new BoardStruct(0, 4, Tile),
    interval: null,
  };

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        const state = { ...this.state };
        state.boardStruct.addRow();
        this.setState(state);
      }, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { board, keys } = this.state.boardStruct.getBoardReverse();
    return (
      <FadeInView style={styles.game}>
        <Nav pageTitle="BOARD" hideRefresh={false} />
        <View style={styles.board}>
          {board.map((row, index) => {
            return (
              <TileRow
                tileSize={this.state.boardStruct.getTileSize()}
                key={keys[index]}
              >
                {row}
              </TileRow>
            );
          })}
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
