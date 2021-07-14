import React, { useState } from 'react';
import { Text, View, StyleSheet,
         ImageBackground,
         TouchableOpacity, TextInput} from 'react-native';

import BackButton from '../components/BackButton';
import Colors from '../components/Colors';
import RegisterScreen from './RegisterScreen';
        
const ResetScreen = ({navigation}) => {
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
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Reset your password.
        </Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>
          Try not to forget it this time
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.placeHolder} 
          placeholder="New Password"
          placeholderTextColor='silver'
        />
        <TextInput style={styles.placeHolder} 
          placeholder="Confirm New Password"
          placeholderTextColor='silver'
        />
        <TouchableOpacity /*onPress={}*/>
          <View style={styles.loginButton}>
            <View style={styles.login}>
              <Text style={styles.loginText}>
                Login
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  titleText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white'
  },
  titleContainer: {
    paddingLeft: 25,
    paddingTop: 5
  },
  subtitleText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: 'white'
  },
  subtitleContainer: {
    paddingLeft: 25,
    paddingTop: 5
  },
  backContainer: {
    paddingLeft: 25,
    paddingTop: 30
  },
  inputContainer:{
    flex: 1,
    alignItems: 'center',
    paddingTop: 85,
  },
  placeHolder: {
    height: 45, 
    width: 317, 
    borderColor: 'silver', 
    borderRadius: 14, 
    borderWidth: 1,  
    backgroundColor: Colors.grey,
    marginBottom: 20, color: 'silver',
    paddingLeft: 20
  },
  login: {
    height: 45,
    width: 317,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  loginText: { 
    color: 'black',
    fontSize: 17,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
  },
  loginButton: {
    paddingTop: 330
  },
});

export default ResetScreen;
