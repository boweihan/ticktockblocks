import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { ActionCreators } from '../../actions';
import styles from './styles/ModalStyles';

class FullScreenModal extends React.Component {
  render() {
    const { visible, msg, color } = this.props.modal;
    return (
      <Modal
        isVisible={visible}
        backdropColor={color}
        backdropOpacity={1}
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        animationInTiming={200}
        animationOutTiming={200}
        backdropTransitionInTiming={200}
        backdropTransitionOutTiming={200}
      >
        <View>
          <View style={styles.modal}>
            <Text style={[styles.modalMsg, { color: this.props.modal.color }]}>
              {msg}
            </Text>
          </View>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => {
              this.props.hideModal();
            }}
          >
            <Ionicons
              style={styles.modalClose}
              name="md-arrow-dropright-circle"
            />
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
}

FullScreenModal.propTypes = {
  modal: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FullScreenModal);
