import React from 'react';
import { View, Dimensions } from 'react-native';
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

const Width = Dimensions.get('window').width;

class Board extends React.Component {
  constructor(props) {
    const width = Width * 0.15 * props.columns + 10;
    const tileSize = width / props.columns;
    super();
    this.state = {
      width,
      tileSize,
      interval: null,
      boardStruct: new BoardStruct(0, props.columns, Tile),
    };
  }

  componentWillMount() {
    this.addRow();
    this.setState({
      interval: setInterval(() => {
        this.addRow();
        this.checkLose();
      }, 5000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  resetBoard = () => {
    clearInterval(this.state.interval);
    const board = new BoardStruct(0, this.props.columns, Tile);
    board.addRow();
    this.setState({
      boardStruct: board,
      interval: setInterval(() => {
        this.addRow();
        this.checkLose();
      }, 5000),
    });
  };

  addRow = () => {
    const newState = { ...this.state };
    newState.boardStruct.addRow();
    this.setState(newState);
  };

  removeBlock = ({ key, index, type }) => {
    const newState = { ...this.state };
    newState.boardStruct.removeBlock(key, index, type);
    this.setState(newState);
  };

  removeBlockWithSwipe = (tile, direction) => {
    const newState = { ...this.state };
    newState.boardStruct.removeBlockWithSwipe(
      tile.key,
      tile.index,
      tile.type,
      direction,
    );
    this.setState(newState);
  };

  checkLose = () => {
    if (this.state.boardStruct.getRows() > this.props.rows) {
      this.props.setRoute('menu');
    }
  };

  render() {
    const that = this;
    const { board, indices } = this.state.boardStruct.getBoard();
    const { tileSize, width } = this.state;
    return (
      <FadeInView style={styles.game}>
        <Nav
          pageTitle="BOARD"
          hideRefresh={false}
          resetBoard={this.resetBoard}
        />
        <View style={styles.boardContainer}>
          <View
            style={{
              ...styles.board,
              height: tileSize * this.props.rows + 4 * this.props.rows + 14, // 4px for each block, 14 for border
              width: width + this.props.columns * 4 + 14, // 4px for each block, 4px for the row, 10 for border
            }}
          >
            {board.map((row, key) => {
              return (
                <TileRow tileSize={tileSize} key={indices[key]}>
                  {row.map((tile, tileIndex) => {
                    return tile ? (
                      <Tile
                        type={tile.type}
                        key={`${tile.index}_${tile.key}`}
                        tileSize={tileSize}
                        number={tile.number}
                        onClick={() => that.removeBlock(tile)}
                        onSwipe={direction =>
                          that.removeBlockWithSwipe(tile, direction)
                        }
                      />
                    ) : (
                      <EmptyTile key={tileIndex} tileSize={tileSize} /> // eslint-disable-line
                    );
                  })}
                </TileRow>
              );
            })}
          </View>
        </View>
      </FadeInView>
    );
  }
}

Board.propTypes = {
  setRoute: PropTypes.func.isRequired,
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
};

Board.defaultProps = {};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
