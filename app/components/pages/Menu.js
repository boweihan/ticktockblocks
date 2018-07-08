import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import Colors from '../../constants/colors';
import styles from './styles/MenuStyles';

// components
import FadeInView from '../wrappers/FadeInView';
import MenuButton from '../atoms/MenuButton';

class Menu extends React.Component {
  render() {
    return (
      <FadeInView style={styles.menu}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Tick Tock</Text>
        </View>
        <View style={styles.title}>
          <View
            style={{
              ...styles.blockContainer,
              backgroundColor: Colors.lightGreen,
            }}
          >
            <Text style={styles.block}>B</Text>
          </View>
          <View
            style={{
              ...styles.blockContainer,
              backgroundColor: Colors.lightRed,
            }}
          >
            <Text style={styles.block}>L</Text>
          </View>
          <View
            style={{
              ...styles.blockContainer,
              backgroundColor: Colors.lightBrown,
            }}
          >
            <Text style={styles.block}>O</Text>
          </View>
          <View
            style={{
              ...styles.blockContainer,
              backgroundColor: Colors.lightBlue,
            }}
          >
            <Text style={styles.block}>C</Text>
          </View>
          <View
            style={{
              ...styles.blockContainer,
              backgroundColor: Colors.lightOrange,
            }}
          >
            <Text style={styles.block}>K</Text>
          </View>
          <View
            style={{
              ...styles.blockContainer,
              backgroundColor: Colors.lightGray,
            }}
          >
            <Text style={styles.block}>S</Text>
          </View>
        </View>
        <MenuButton
          onPress={() => this.props.setRoute('board')}
          buttonText="Let's Go!"
        />
        <MenuButton
          onPress={() => this.props.setRoute('settings')}
          buttonText="Settings"
          style={{
            fontSize: 15,
          }}
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
