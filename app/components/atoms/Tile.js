import React from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';
import * as Animatable from 'react-native-animatable';

const PRESS_LENGTH = 1000;

const getTileStyle = (tileSize, type) => {
  return {
    width: tileSize,
    height: tileSize,
    backgroundColor: type.color,
    margin: 2,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
};

class Tile extends React.PureComponent {
  state = {
    animation: new Animated.Value(0),
  };

  timer: null;

  handleStartPress = onClick => {
    this.timer = setTimeout(() => onClick(this.props.type), PRESS_LENGTH);
    this.runAnimation();
  };

  handleEndPress = () => {
    this.state.animation.setValue(0);
    Animated.timing(this.state.animation).stop();
    clearTimeout(this.timer);
  };

  runAnimation() {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: PRESS_LENGTH,
      easing: Easing.linear,
    }).start();
  }

  render() {
    return (
      <Animatable.View
        animation="bounceInDown"
        duration={1000}
        style={getTileStyle(this.props.tileSize, this.props.type)}
        onTouchStart={() => this.handleStartPress(this.props.onClick)}
        onTouchEnd={this.handleEndPress}
      >
        <Animated.View
          style={{
            height: 3,
            width: this.state.animation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '80%'],
            }),
            backgroundColor: 'red',
          }}
        />
      </Animatable.View>
    );
  }
}

Tile.propTypes = {
  type: PropTypes.object.isRequired,
  tileSize: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tile;
