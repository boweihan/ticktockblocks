import React from 'react';
import { View, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import levelConfig from '../../constants/levels';
import styles from './styles/LevelsStyles';

// components
import FadeInView from '../wrappers/FadeInView';
import Nav from '../molecules/Nav';
import LevelCell from '../atoms/LevelCell';

class Levels extends React.Component {
  render() {
    return (
      <FadeInView style={styles.levels}>
        <Nav pageTitle="PICK A LEVEL" />
        <Animatable.View animation="fadeInUp" style={styles.list}>
          <ScrollView>
            <View style={styles.rows}>
              {levelConfig.map((level, key) => (
                <LevelCell key={key} level={level} /> // eslint-disable-line
              ))}
            </View>
          </ScrollView>
        </Animatable.View>
      </FadeInView>
    );
  }
}
export default Levels;
