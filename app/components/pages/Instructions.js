import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles/InstructionsStyles';

// components
import FadeInView from '../wrappers/FadeInView';
import Nav from '../molecules/Nav';

// assets
const imgStep1 = require('../../assets/images/splash.png');
const imgStep2 = require('../../assets/images/splash.png');
const imgStep3 = require('../../assets/images/splash.png');
const imgStep4 = require('../../assets/images/splash.png');
const imgStep5 = require('../../assets/images/splash.png');

class Instructions extends React.Component {
  static getEntries() {
    return [
      {
        imgSource: imgStep1,
        text: 'Tap to open the level selector.',
        style: { height: 90, width: '80%' },
      },
      {
        imgSource: imgStep2,
        text: 'Choose a level.',
        style: { height: 160, width: '80%' },
      },
      {
        imgSource: imgStep3,
        text: 'Choose a pattern.',
        style: { height: 130, width: '80%' },
      },
      {
        imgSource: imgStep4,
        text: 'Flip the tiles to red.',
        style: { height: 260, width: '80%' },
      },
      {
        imgSource: imgStep5,
        text: 'Level up! Can you beat all the levels?',
        style: { height: 160, width: '80%' },
      },
    ];
  }

  static renderCarouselItem({ item, index }) {
    return (
      <View style={styles.step} key={index}>
        <View style={styles.stepNumber}>
          <Text style={styles.stepNumberText}>{index + 1}</Text>
        </View>
        <View style={styles.stepInfo}>
          {item.text && <Text style={styles.stepInfoText}>{item.text}</Text>}
          <View style={item.style}>
            <Image style={styles.stepImage} source={item.imgSource} />
          </View>
        </View>
      </View>
    );
  }

  static getItems() {
    return Instructions.getEntries().map((item, index) =>
      Instructions.renderCarouselItem({ item, index }),
    );
  }

  render() {
    return (
      <FadeInView style={styles.instructions}>
        <Nav pageTitle="HOW TO PLAY" />
        <Animatable.View
          animation="fadeInUp"
          style={{ flex: 7, marginBottom: 30, width: '90%' }}
        >
          <ScrollView style={styles.list}>
            {Instructions.getItems()}
            <View style={{ padding: 50 }} />
          </ScrollView>
        </Animatable.View>
      </FadeInView>
    );
  }
}

export default Instructions;
