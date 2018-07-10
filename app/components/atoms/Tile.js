import React from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing, Text, PanResponder, View } from 'react-native';
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
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
    };
    this.panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        const { dy, dx } = gestureState;
        const minSwipeLength = 30;
        let direction;
        if (Math.abs(dy) > Math.abs(dx)) {
          if (dy > minSwipeLength) {
            direction = 'down';
          } else if (dy < -1 * minSwipeLength) {
            direction = 'up';
          }
        } else {
          if (dx > minSwipeLength) {
            direction = 'right';
          } else if (dx < -1 * minSwipeLength) {
            direction = 'left';
          }
        }
        if (direction) {
          this.props.onSwipe(direction);
        }
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  panResponder: null;

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
        {...this.panResponder.panHandlers}
        animation="bounceInDown"
        duration={1000}
        style={getTileStyle(this.props.tileSize, this.props.type)}
      >
        <Animated.View
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 10,
            }}
          >
            {this.props.type.operation}
          </Text>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text>{this.props.type.number}</Text>
          </View>
        </Animated.View>
      </Animatable.View>
    );
  }
}

Tile.propTypes = {
  type: PropTypes.object.isRequired,
  tileSize: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onSwipe: PropTypes.func.isRequired,
};

export default Tile;
