import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import styles from './styles/BoardStyles';

// components
import FadeInView from '../wrappers/FadeInView';
import TileRow from '../molecules/TileRow';
import Nav from '../molecules/Nav';

class Board extends React.Component {
  state = {
    board: [],
    interval: null,
  };
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        const state = { ...this.state };
        state.board.push(
          <TileRow numTiles={4} key={`${new Date().getTime()}_tilerow`} />,
        );
        this.setState(state);
      }, 10000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <FadeInView style={styles.game}>
        <Nav pageTitle="BOARD" hideRefresh={false} />
        <View style={styles.board}>{this.state.board.reverse()}</View>
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
