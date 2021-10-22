import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();

const height = Dimensions.get('window').height;

const Medico = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.remediosWrapper}>
        <View style={styles.remediosTextWrapper}>
          <Text style={styles.remediosTitle}>Remédios</Text>
          <Text style={styles.remedioNome}>{item.remedioUm}</Text>
          <Text style={styles.remedioDetails}>{item.descUm}</Text>
          <Text style={styles.remedioNome}>{item.remedioDois}</Text>
          <Text style={styles.remedioDetails}>{item.descDois}</Text>
          <Text style={styles.remedioNome}>{item.remedioTres}</Text>
          <Text style={styles.remedioDetails}>{item.descTres}</Text>
        </View>

        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => alert('Pagar remedios')}>
          <Text style={styles.buttonText}>Pegar remedio</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-between',
  },
  remediosWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25,
    justifyContent: 'space-between',
  },
  backIcon: {
    marginLeft: 15,
    marginTop: 30,
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.white,
  },
  remediosTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  remediosTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 28,
    color: colors.black,
  },
  remedioNome: {
    marginTop: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    color: colors.darkgray,
  },
  remedioDetails: {
    marginTop: 10,
    marginLeft: 10,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: colors.darkgray,
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginVertical: 30,
    backgroundColor: colors.green,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
});

export default Medico;
