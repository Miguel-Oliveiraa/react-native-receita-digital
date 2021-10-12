import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate('Medico')} title="Click" />
    </View>
  );
};

export default Home;
