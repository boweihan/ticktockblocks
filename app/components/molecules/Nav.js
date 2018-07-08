import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import Colors from '../../constants/colors';
import styles from './styles/NavStyles';

class Nav extends React.PureComponent {
  render() {
    return (
      <View style={styles.nav}>
        <TouchableHighlight
          underlayColor={Colors.white}
          activeOpacity={0.5}
          style={styles.navButton}
          onPress={() => this.props.setRoute('menu')}
        >
          <View style={styles.menuContainer}>
            <View style={styles.backToMenu}>
              <Text style={styles.menuText}>MENU</Text>
            </View>
          </View>
        </TouchableHighlight>
        <View style={styles.settingsElement}>
          <View style={styles.menuContainer}>
            <Animatable.View animation="bounceIn" style={styles.settingsBox}>
              <Text style={[styles.menuText, styles.settingsText]}>
                {this.props.pageTitle}
              </Text>
            </Animatable.View>
          </View>
        </View>
      </View>
    );
  }
}

Nav.propTypes = {
  setRoute: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    triColorMode: state.triColorMode,
    boardStateCache: state.boardStateCache,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
