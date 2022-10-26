import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function LoginScreen({ navigation }) {

  const [username, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [seePassword, setSeePassword] = useState<Boolean>(false);
  const [checkValidUsername, setCheckValidUsername] = useState<Boolean>(false);

  const onLoginClick = () => {
    const checkPassowrd = checkPasswordValidity(password);
    if (username.length === 0) {
      Alert.alert('Username can not be empty');
    }
    else {
      if (!checkPassowrd) {
        navigation.navigate('DashboardScreen');
      } else {
        Alert.alert(checkPassowrd);
      }
    }
  }

  const checkPasswordValidity = (value) => {

    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-16 Characters Long.';
    }
    return null;
  }

  const handleCheckEmail = (text) => {

    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (text.length === 0) {
      setCheckValidUsername(false);
    }
    if (re.test(text) || regex.test(text)) {
      setCheckValidUsername(false);
    } else {
      setCheckValidUsername(true);
    }
  }

  const handleCheckPassword = (value) => {
    setPassword(value);
    if (value.length < 8) {
      setSeePassword(true);
    }
    else {
      setSeePassword(false);
    }
  }

  return (
    <View style={styles.mainBody}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <View style={{ alignItems: 'center' }}>
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={username}
              placeholder="Username"
              placeholderTextColor="#fff"
              autoCapitalize="none"
              underlineColorAndroid="#f000"
              onChangeText={handleCheckEmail}
            />           
            {checkValidUsername ? (
              <Text style={styles.textFailed}>Please enter valid enail</Text>
            ) : (
              <Text style={styles.textFailed}> </Text>
            )}
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={password}
              placeholder="Password"
              placeholderTextColor="#fff"
              onChangeText={handleCheckPassword}
              underlineColorAndroid="#f000" />
            {seePassword ? (
              <Text style={styles.textFailed}>Password can't be too short</Text>
            ) : (
              <Text style={styles.textFailed}> </Text>
            )}
          </View>

          <View style={styles.forgotPassword}>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onLoginClick} >
            <Text style={styles.buttonTextStyle}>LOGIN</Text>
          </TouchableOpacity>

          <View style={styles.signup}>
            <Text style={styles.signup}>Don’t have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.replace('RegisterScreen')}>
              <Text style={styles.signup}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e28743',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 14,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#fff',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    padding: 4,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 30,
    marginBottom: 15,
  },
  buttonTextStyle: {
    color: '#e28743',
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
  },
  registerTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 6,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 10,
    color: '#fff',
  },
  forgot: {
    fontSize: 13,
    color: '#fff',
    paddingRight: 10,
  },
  signup: {
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center'
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
});