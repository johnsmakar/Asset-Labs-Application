import React, { useState } from 'react';
import { Text, View, StyleSheet,
         Button, ImageBackground,
        TouchableOpacity} from 'react-native';

import Colors from '../components/Colors';
import BackButton from '../components/BackButton';

const DashboardScreen = ({ navigation }) => {
  const back = () => {
    navigation.pop();
  };

  return (
    <ImageBackground source={require('../img/MainBackground.jpg')}
                       style={styles.background}>
      <TouchableOpacity onPress={back}>
        <View style={styles.backContainer}>
          <BackButton></BackButton>
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>
        Successful Login
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white'
  },
  backContainer: {
    paddingLeft: 25,
    paddingTop: 30
  },
});

export default DashboardScreen;
