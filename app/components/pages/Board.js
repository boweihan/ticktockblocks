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
import EmptyTile from '../atoms/EmptyTile';

class Board extends React.Component {
  constructor(props) {
    super();
    this.state = {
      interval: null,
      boardStruct: new BoardStruct(0, 4, Tile),
    };
  }

  componentWillMount() {
    this.addRow();
    this.setState({
      interval: setInterval(() => {
        this.addRow();
      }, 5000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  addRow = () => {
    const newState = { ...this.state };
    newState.boardStruct.addRow();
    this.setState(newState);
  };

  removeBlock = (key, index) => {
    const newState = { ...this.state };
    newState.boardStruct.removeBlock(key, index);
    this.setState(newState);
  };

  render() {
    const that = this;
    const { board, indices } = this.state.boardStruct.getBoard();
    const tileSize = this.state.boardStruct.getTileSize();
    return (
      <FadeInView style={styles.game}>
        <Nav pageTitle="BOARD" hideRefresh={false} />
        <View style={styles.board}>
          {board.map((row, key) => {
            return (
              <TileRow tileSize={tileSize} key={indices[key]}>
                {row.map((tile, tileIndex) => {
                  return tile ? (
                    <Tile
                      key={`${tile.index}_${tile.key}`}
                      tileSize={tileSize}
                      onClick={() => that.removeBlock(tile.key, tile.index)}
                    />
                  ) : (
                    <EmptyTile key={tileIndex} tileSize={tileSize} /> // eslint-disable-line
                  );
                })}
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

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
