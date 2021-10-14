import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import farmaciasData from '../assets/data/farmaciasData';
import receitasCategoriesData from '../assets/data/receitasCategoriesData';
import receitasData from '../assets/data/receitasData';
import {SafeAreaView} from 'react-native-safe-area-context';
import icone from '../assets/images/Icone.png';

Feather.loadFont();

const Home = ({navigation}) => {
  const renderReceitaItem = ({item}) => {
    return (
      <TouchableOpacity>
        <ImageBackground
          source={item.Image}
          style={styles.receitaItem}
          imageStyle={styles.receitaItemImage}>
          <Text style={styles.receitaItemTitle}>{item.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/*Header*/}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
            <Image source={icone} style={styles.profileImage} />
          </View>
        </SafeAreaView>

        {/*Receitas*/}
        <View style={styles.wrapperReceitas}>
          <Text style={styles.titleReceitas}>Receitas</Text>
          <View style={styles.wrapperCategoriesReceitas}>
            <Text
              style={[styles.categoriesReceitasText, {color: colors.green}]}>
              Geral
            </Text>
            <Text style={styles.categoriesReceitasText}>Cardiologista</Text>
            <Text style={styles.categoriesReceitasText}>Oftalmologista</Text>
            <Text style={styles.categoriesReceitasText}>Neurologista</Text>
          </View>
          <View style={styles.wrapperItemsReceitas}>
            <FlatList
              data={receitasData}
              renderItem={renderReceitaItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 52,
    height: 52,
  },
  wrapperReceitas: {
    marginHorizontal: 20,
    marginTop: 27,
  },
  titleReceitas: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.black,
  },
  wrapperCategoriesReceitas: {
    flexDirection: 'row',
    marginTop: 20,
  },
  categoriesReceitasText: {
    marginRight: 30,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },
});

export default Home;
