import React, { useContext, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from '../../assets/images/logo.png';
import Icon1 from 'react-native-vector-icons/Entypo';



const LoginScreen = () => {
      const navigation = useNavigation();
      const [isClicked, setIsClicked] = useState(false);
  
      const handleBackPress = () => {
          if (!isClicked) {
              setIsClicked(true);
              navigation.goBack();
          }
      };

  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [cnic, setCnic] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customAlertVisible, setCustomAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message) => {
    setAlertMessage(message);
    setCustomAlertVisible(true);
  };


  const handleDisabledClick = () => {
    if (loading) {
      Alert.alert('Warning', 'Login is already in progress. Please wait.');
    }
  };

  
  useEffect(() => {
    const loadSavedCredentials = async () => {
      try {
        const savedUserId = await AsyncStorage.getItem('userId');
        const savedDealerId = await AsyncStorage.getItem('dealerId');
        const savedUserName = await AsyncStorage.getItem('userName');
        const savedPassword = await AsyncStorage.getItem('password');
        const savedIsChecked = await AsyncStorage.getItem('isChecked') === 'true';

        if (savedIsChecked && savedUserId && savedUserName && savedDealerId && savedPassword) {
          setUserId(savedUserId);
          setUserName(savedUserName);
          setPassword(savedPassword);
          setDealerId(savedDealerId)
          setIsChecked(savedIsChecked);
        }
      } catch (error) {
        console.error('Failed to load saved credentials:', error);
      }
    };

    loadSavedCredentials();

    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        Alert.alert('No Internet Connection', 'Please connect to the internet to proceed.');
      }
    });

    return () => unsubscribe();
  }, []);


const handleInputChange = (text) => {
  const sanitizedText = text.replace(/[^0-9]/g, ''); 
  if (text !== sanitizedText) {
    showAlert('Only numbers are allowed in User ID.'); 
  }
  setCnic(sanitizedText);
};

const handleInputChangePassword = (text) => {
  const sanitizedText = text.replace(/[^0-9]/g, ''); 
  if (text !== sanitizedText) {
    showAlert('Only numbers are allowed in Password.'); 
  }
  setPassword(sanitizedText);
};


const handleSignIn = async () => {
  if (loading) {
    Alert.alert('Warning', 'Login is already in progress. Please wait.');
    return;
  }

  if (!userName || !password || !userId || !dealerId) {
    Alert.alert('Error', 'Please enter your CNIC, Email, Name and password');
    return;
  }

  setLoading(true);
};



  return (
    <ScrollView contentContainerStyle={styles.container}>
                <StatusBar backgroundColor="#0066B3" barStyle="light-content" />

                        <View style={styles.header}>
                            <View style={styles.headerLeft}>
                                <TouchableOpacity
                                    style={styles.chevronIconContainer}
                                    onPress={handleBackPress}
                                    disabled={isClicked} 
                                >
                                    <Icon1 name="chevron-small-left" size={30} color="#000" />
                                </TouchableOpacity>
                                {/* <Text style={styles.headerTitle}>{heading}</Text> */}
                            </View>
                        </View>
      
      <View style={styles.topContent}>
        <Text style={styles.welcomeText}>Sign In</Text>
        <View style={styles.welcomeTextCOn}>
        <Text style={styles.attendeeText}>to</Text>
        <Image source={logo} style={styles.logo} />
        </View>
        <Text style={styles.subtitleText}>Hello there, login to continue</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>CNIC</Text>
        <TextInput
          style={styles.input}
          placeholder="eg. (000000000000)"
          placeholderTextColor="#A0A5BA"
          keyboardType="number-pad"
          onChangeText={handleInputChange}
          value={cnic}
        />
      </View>
        <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="eg. (example@gmail.com)"
          placeholderTextColor="#A0A5BA"
          keyboardType="default"
          onChangeText={setEmail}
          value={email}
        />
      </View>



          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="eg. (RafayM)"
              placeholderTextColor="#A0A5BA"
              keyboardType="default"
              onChangeText={setUserName}
              value={userName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="#A6A6A6"
                secureTextEntry={!isPasswordVisible}
                keyboardType="number-pad"
                onChangeText={handleInputChangePassword}
                value={password}
              />
              <TouchableOpacity
                style={styles.eyeIconContainer}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#A6A6A6" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.optionsContainer}>
            <View style={styles.rememberMeForgetContainer}>
              <TouchableOpacity
                onPress={() => setIsChecked(!isChecked)}
                style={styles.checkboxWrapper}
              >
                <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
                  {isChecked && <Icon name="check" size={16} color="#FFF" />}
                </View>
                <Text style={styles.checkboxLabel}>Remember Me</Text>
              </TouchableOpacity> 
            </View>
            <TouchableWithoutFeedback onPress={handleDisabledClick}>
              <TouchableOpacity
                style={[
                  styles.loginButton,
                  loading && { backgroundColor: '#09314A' }, 
                ]}
                onPress={handleSignIn}
                disabled={loading} 
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#FFF" />
                ) : (
                  <Text style={styles.loginText}>Sign In</Text>
                )}
              </TouchableOpacity>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
      <Modal
        visible={customAlertVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setCustomAlertVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.alertBox}>
            <Text style={styles.alertText}>{alertMessage}</Text>
            <TouchableOpacity
              style={styles.alertButton}
              onPress={() => setCustomAlertVisible(false)}
            >
              <Text style={styles.alertButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    minHeight: "100%",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 14,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#fff',
},
headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
},
chevronIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    width: 45,
    height: 45,
    backgroundColor: '#ECF0F4',
},
headerTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Sen-Bold',
},
  welcomeTextCOn:{
    flexDirection:'row',
    alignItems:'center',
  },
  topContent: {    
    paddingHorizontal: 20
  },
  logo: {
    width: 220,
    height: 55,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: 'Sen-Bold',
    color: '#000',
  },

  attendeeText: {
    fontSize: 24,
    fontFamily: 'Sen-Regular',
    color: '#000',
  },
  highlightedText: {
    color: '#09314A',
    fontFamily: 'Sen-ExtraBold',
  },
  subtitleText: {
    fontSize: 16,
    fontFamily: 'Sen-Medium',
    color: 'gray',
    marginTop: 5,
    marginBottom: 5,
  },
  inputLabel: {
    fontFamily: 'Sen-Medium',
    fontSize: 16,
    marginBottom: 8,
    color: '#000',
  },
  
  
  
  
  
  
  
  
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertBox: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  alertText: {
    fontFamily: 'Sen-Medium',
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  alertButton: {
    backgroundColor: '#09314A',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  alertButtonText: {
    fontFamily: 'Sen-Bold',
    fontSize: 16,
    color: '#fff',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'column',
    gap: 22,
  },
  inputLabel: {
    color: '#000',
    fontFamily: 'Sen-Medium',
    textTransform: 'uppercase',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    fontFamily: 'Sen-Medium',
    backgroundColor: '#F0F5FA',
    paddingVertical: 15,
    paddingLeft: 20,
    paddingRight: 60,
    fontSize: 16,
    letterSpacing: 1,
    borderRadius: 8,
    width: '100%',
    color: 'black'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 15,
  },
  optionsContainer: {
    marginTop: 5,
  },
  rememberMeForgetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#0066B3',
    borderRadius: 5,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#0066B3',
  },
  checkboxLabel: {
    fontFamily: 'Sen-Medium',
    fontSize: 15,
    color: '#7E8A97',
  },
  forgotPassword: {
    fontFamily: 'Sen-SemiBold',
    color: '#09314A',
    fontSize: 15,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0066B3',
    height: 50,
    borderRadius: 12,
  },
  loginText: {
    fontFamily: 'Sen-SemiBold',
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 18,
  },
  registerTextContainer: {
    textAlign: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 10
  },
  registerText: {
    fontSize: 15,
    fontFamily: 'Sen-Medium',
  },
  registerLink: {
    color: '#09314A',
    fontFamily: 'Sen-Bold',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;