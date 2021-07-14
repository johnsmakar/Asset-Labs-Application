import React, { useState } from 'react';
import { Text, View, StyleSheet,
         ImageBackground,
         TouchableOpacity, TextInput} from 'react-native';

import BackButton from '../components/BackButton';
import Colors from '../components/Colors';
        
const RegisterScreen = ({navigation}) => {
  const [companyName, setCompanyName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const back = () => {
    navigation.pop();
  };

  const handleRegistration = async () => 
  {
    if (password != confirmPassword)
    {
      setMessage("Passwords don't match");
    }

    else 
    {
      var obj = 
      {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Login: username,
        Password: password, 
        Phone: phone, 
        CompanyName: companyName
      };

      var js = JSON.stringify(obj);
      
      try
      {
        const response = await fetch('https://cop-4331-16.herokuapp.com/api/register',
          {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

        var res = JSON.parse(await response.text());
        console.log(JSON.stringify(res));
        setMessage("Successfully Registered!");
        navigation.push('LoginScreen');
      }

      catch(e)
      {
        console.log("error : " + e);
      }
    }
  }

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
          Let's get you started.
        </Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>
          Create a New Account
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.placeHolder} 
          placeholder="Company Name"
          placeholderTextColor='silver'
          onChangeText={(val) => setCompanyName(val)}
        />
        <TextInput style={styles.placeHolder} 
          placeholder="Firstname"
          placeholderTextColor='silver'
          onChangeText={(val) => setFirstName(val)}
        />
        <TextInput style={styles.placeHolder} 
          placeholder="Lastname"
          placeholderTextColor='silver'
          onChangeText={(val) => setLastName(val)}
        />
        <TextInput style={styles.placeHolder} 
          placeholder="Username"
          placeholderTextColor='silver'
          onChangeText={(val) => setUsername(val)}
        />
        <TextInput style={styles.placeHolder} 
          placeholder="Email"
          placeholderTextColor='silver'
          onChangeText={(val) => setEmail(val)}
        />
        <TextInput style={styles.placeHolder} 
          placeholder="Phone"
          placeholderTextColor='silver'
          keyboardType='number-pad'
          onChangeText={(val) => setPhone(val)}
        />
        <TextInput style={styles.placeHolder} 
          placeholder="Password"
          placeholderTextColor='silver'
          secureTextEntry={true}
          onChangeText={(val) => setPassword(val)}
        />
        <TextInput style={styles.placeHolder} 
          placeholder="Confirm Password"
          placeholderTextColor='silver'
          secureTextEntry={true}
          onChangeText={(val) => setConfirmPassword(val)}
        />
        <TouchableOpacity onPress={handleRegistration}>
          <View style={styles.buttomButton}>
            <View style={styles.registerButton}>
              <Text style={styles.registerText}>Register</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>{message}</Text>
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
    paddingLeft: 15,
    paddingTop: 5
  },
  subtitleText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: 'white'
  },
  subtitleContainer: {
    paddingLeft: 15,
    paddingTop: 2
  },
  backContainer: {
    paddingLeft: 15,
    paddingTop: 30
  },
  inputContainer:{
    flex: 1,
    alignItems: 'center',
    paddingTop: 25,
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
  registerButton: {
    height: 45,
    width: 317,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  registerText: { 
    color: 'black',
    //fontWeight: 'bold',
    fontSize: 17,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
  },
  buttomButton: {
    paddingTop: 20
  },
  text: { 
    color: 'silver',
    fontSize: 14,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
    paddingTop: 7
  },
});

export default RegisterScreen;
