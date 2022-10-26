import React, { useState } from 'react';
import { StyleSheet, View, Alert,Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterScreen({ navigation }) {

  const [name, setName] = useState<String>('');
  const [email, setEmail] = useState<String>('');
  const [pass, setPass] = useState<String>('');
  const [confirmpass, setConfirmPass] = useState<String>('');
  const [nameValid, setNameValid] = useState<Boolean>(false);
  const [emailValid, setEmailValid] = useState<Boolean>(false);
  const [passValid, setPassValid] = useState<Boolean>(false);
  const [confirmValid, setConfirmValid] = useState<Boolean>(false);

  function checkPasswordValidity(value) {
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

  const handleName = (value) => {
    setName(value);
    if (value.length === 0) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (text.length === 0) {
      setEmailValid(false);
    } else if (re.test(text) || regex.test(text)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };

  const handlePass = (value) => {
    setPass(value);
    if (value.length === 0) {
      setPassValid(true);
    } else if (value.length < 8 || value.length > 20) {
      setPassValid(true);
    } else {
      setPassValid(false);
    }
  };

  const handleConfirmPass = (value) => {
    setConfirmPass(value);
    if (value.length === 0) {
      setConfirmValid(true);
    } else {
      setConfirmValid(false);
    }
  };

  const onSubmit = () => {
    const checkPassowrd = checkPasswordValidity(pass);
    if (name.length === 0) {
      Alert.alert('Name can not be empty');
    } 
    else if (email.length === 0) {
      Alert.alert('Email can not be empty');
    } else if (pass.length === 0) {
      Alert.alert('Password should be min 8 characters and max 20 characters');
    } else if (pass !== confirmpass) {
      Alert.alert('Password and confirm password should be same');
    } else if (!checkPassowrd) {
      navigation.navigate('LoginScreen');
    } else {
      Alert.alert(checkPassowrd);
    }
  };

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
              placeholder="User Name"
              placeholderTextColor="#fff"
              autoCapitalize="none"
              value={name}
              onChangeText={handleName}
              underlineColorAndroid="#f000"
            />
            {nameValid ? (
              <Text style={styles.textFailed}>Name can't be empty</Text>
            ) : (
              <Text style={styles.textFailed}> </Text>
            )}
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Email"
              value={email}
              onChangeText={handleCheckEmail}
              placeholderTextColor="#fff"
              underlineColorAndroid="#f000"
            />
            {emailValid ? (
              <Text style={styles.textFailed}>Wrong format email</Text>
            ) : (
              <Text style={styles.textFailed}> </Text>
            )}
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Password"
              value={pass}
              onChangeText={handlePass}
              placeholderTextColor="#fff"
              underlineColorAndroid="#f000"
            />
             {passValid ? (
                <Text style={styles.textFailed}>
                  Password can't be too short
                </Text>
              ) : (
                <Text style={styles.textFailed}> </Text>
              )}
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Confirm Password"
              placeholderTextColor="#fff"
              value={confirmpass}
              onChangeText={handleConfirmPass}
              underlineColorAndroid="#f000"
            />
            {confirmValid ? (
                <Text style={styles.textFailed}>
                  Confirm password can't be matched
                </Text>
              ) : (
                <Text style={styles.textFailed} />
              )}
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Phone Number"
              placeholderTextColor="#fff"
              underlineColorAndroid="#f000"
            />
          </View>
          <View style={styles.forgotPassword}>
            <TouchableOpacity>
              <Text style={styles.forgot}>I agree the Terms & Conditions</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onSubmit}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
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
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
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
});