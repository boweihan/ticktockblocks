import React from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

class FadeInView extends React.PureComponent {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 250,
    }).start();
  }

  componentWillUnmount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 2000,
    }).start();
  }

  render() {
    const { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

FadeInView.propTypes = {
  style: PropTypes.object,
  children: PropTypes.array,
};

FadeInView.defaultProps = {
  style: null,
  children: null,
};

export default FadeInView;
