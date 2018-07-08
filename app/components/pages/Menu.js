import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import appConfig from '../../constants/appConfig';
import styles from './styles/MenuStyles';

// components
import FadeInView from '../wrappers/FadeInView';
import MenuButton from '../atoms/MenuButton';

class Menu extends React.Component {
  render() {
    return (
      <FadeInView style={styles.menu}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{appConfig.name}</Text>
        </View>
        <MenuButton
          onPress={() => this.props.setRoute('board')}
          buttonText="BACK TO BOARD"
        />
        <MenuButton
          onPress={() => this.props.setRoute('levels')}
          buttonText="LEVELS"
        />
        <MenuButton
          onPress={() => this.props.setRoute('instructions')}
          buttonText="HOW TO PLAY"
        />
        <MenuButton
          onPress={() => this.props.setRoute('settings')}
          buttonText="SETTINGS"
        />
      </FadeInView>
    );
  }
}

Menu.propTypes = {
  setRoute: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(undefined, mapDispatchToProps)(Menu);
