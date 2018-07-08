import React from 'react';
import { Text, TouchableHighlight, Alert } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import styles from './styles/SettingsStyles';
import Colors from '../../constants/colors';

// components
import FadeInView from '../wrappers/FadeInView';
import Nav from '../molecules/Nav';

class Settings extends React.Component {
  resetGame() {
    Alert.alert(
      'Clear Progress?',
      'Are you sure you want to do that? This will clear all your application data.',
      [
        { text: 'Cancel', onPress: () => {}, style: 'cancel' },
        { text: 'Confirm', onPress: () => this.props.resetGame() },
      ],
      { cancelable: false },
    );
  }

  render() {
    return (
      <FadeInView style={styles.settings}>
        <Nav pageTitle="SETTINGS" />
        <Animatable.View animation="fadeInUp" style={styles.settingsContainer}>
          <TouchableHighlight
            underlayColor={Colors.gray}
            activeOpacity={0.5}
            style={styles.settingsButton}
            onPress={this.resetGame}
          >
            <Text style={styles.progressText}>RESET GAME</Text>
          </TouchableHighlight>
        </Animatable.View>
      </FadeInView>
    );
  }
}

Settings.propTypes = {
  resetGame: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(undefined, mapDispatchToProps)(Settings);
