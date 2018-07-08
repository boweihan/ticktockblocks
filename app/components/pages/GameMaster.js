import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles/GameMasterStyles';

// components
import FadeInView from '../wrappers/FadeInView';
import Menu from './Menu';
import Board from './Board';
import Settings from './Settings';
import Modal from '../molecules/Modal';

const routeMap = {
  menu: <Menu />,
  board: <Board />,
  settings: <Settings />,
};

// routing
class GameMaster extends React.Component {
  static getComponentFromRoute = routes => {
    let route;
    const keys = Object.keys(routes);
    for (let i = 0; i < keys.length; i += 1) {
      if (routes[keys[i]]) {
        route = routeMap[keys[i]];
      }
    }
    return route;
  };

  render() {
    return (
      <FadeInView style={styles.container}>
        {GameMaster.getComponentFromRoute(this.props.routes)}
        <Modal />
      </FadeInView>
    );
  }
}

GameMaster.propTypes = {
  routes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    routes: state.routes,
  };
}

export default connect(mapStateToProps, undefined)(GameMaster);
