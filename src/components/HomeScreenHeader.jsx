import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import Icon1 from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';




const HomeScreenHeader = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: () => logout(navigation) },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.header}>
      <View style={styles.menuHederTextContainer}>
        <View style={styles.headerTextContainer}>
          <View  style={styles.welcomeTextCon}>
          <Text style={styles.welcomeText1}>Saylani Microfinance</Text>
          <Text style={styles.welcomeText2}>Qarze Hasana Program</Text>
          </View>
          <TouchableOpacity onPress={handleLogout}>
            <Icon1 name="person-circle-outline" size={37} color="white" />
          </TouchableOpacity>

        </View>
        <View style={styles.profileNameMainCon}>
          <View style={styles.profileNameCon}>
            {/* <Text style={styles.profileNameShort}>{userName.charAt(0).toUpperCase()}</Text> */}
            <Text style={styles.profileNameShort}>R</Text>
          </View>
          {/* <Text style={styles.profileName}>{userName.toUpperCase()}</Text> */}
          <Text style={styles.profileName}>Hay, Abdul Rafay</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0066B3',
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 10,
  },
  menuHederTextContainer: {
    flex: 1
  },
  headerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignItems: 'center'
  },
  menuIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  welcomeText1: {
    fontSize: 22,
    color: '#FFF',
    fontFamily: 'Sen-Bold',
    marginBottom: 2,
  },
  welcomeText2: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'Sen-Medium',
    marginTop: 2,
  },
  welcomeTextCon:{

  },
  logoutCon: {
    // flexDirection:'row',
    alignItems: 'center',
    gap: 8
  },
  profileName2: {
    fontSize: 17,
    color: 'red',
    fontFamily: 'Sen-SemiBold',
  },
  profileNameMainCon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 12
  },
  profileNameCon: {
    width: 38,
    height: 38,
    borderWidth: 1.3,
    borderRadius: 50,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'

  },
  profileNameShort: {
    fontSize: 23,
    color: '#FFF',
    fontFamily: 'Sen-Regular',
    textAlign: 'center'
  },
  profileName: {
    fontSize: 17,
    color: '#FFF',
    fontFamily: 'Sen-Medium',
  },
  userName: {
    fontSize: 16,
    fontFamily: 'Sen-Bold',
    color: 'black'

  },
})
export default HomeScreenHeader