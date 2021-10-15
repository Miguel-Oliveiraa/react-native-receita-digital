import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import colors from '../assets/colors/colors';

const height = Dimensions.get('window').height;

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
    height: height * 0.4,
  },
  remediosWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export default Medico;
