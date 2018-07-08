import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line
import Colors from '../../constants/colors';
import styles from './styles/NavStyles';

class Nav extends React.PureComponent {
  render() {
    return (
      <View style={styles.nav}>
        <TouchableHighlight
          underlayColor={Colors.black}
          activeOpacity={0.5}
          style={styles.navButton}
          onPress={() => this.props.setRoute('menu')}
        >
          <Ionicons style={styles.iconText} name="md-arrow-round-back" />
        </TouchableHighlight>
        <View style={styles.navLogo}>
          <View
            style={{
              ...styles.navLogoElem,
              backgroundColor: Colors.lightGreen,
            }}
          />
          <View
            style={{ ...styles.navLogoElem, backgroundColor: Colors.lightRed }}
          />
          <View
            style={{
              ...styles.navLogoElem,
              backgroundColor: Colors.lightBrown,
            }}
          />
          <View
            style={{ ...styles.navLogoElem, backgroundColor: Colors.lightBlue }}
          />
          <View
            style={{
              ...styles.navLogoElem,
              backgroundColor: Colors.lightOrange,
            }}
          />
          <View
            style={{
              ...styles.navLogoElem,
              backgroundColor: Colors.lightGray,
            }}
          />
        </View>
        {this.props.hideRefresh ? (
          <View style={styles.navButton} />
        ) : (
          <TouchableHighlight
            activeOpacity={0.5}
            style={styles.navButton}
            onPress={this.props.resetGame}
          >
            <Ionicons style={styles.iconText} name="md-refresh" />
          </TouchableHighlight>
        )}
      </View>
    );
  }
}

Nav.propTypes = {
  setRoute: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  hideRefresh: PropTypes.bool,
};

Nav.defaultProps = {
  hideRefresh: true,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(undefined, mapDispatchToProps)(Nav);
