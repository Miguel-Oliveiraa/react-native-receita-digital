import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import colors from '../assets/colors/colors';

const Medico = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.imageBig}
        style={styles.backgroundImage}></ImageBackground>
      <View style={styles.remediosWrapper}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    width: 100,
    height: 100,
  },
  remediosWrapper: {},
});

export default Medico;
