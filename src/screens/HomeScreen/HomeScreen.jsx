import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import LoanComponent from '../../components/LoanComponent';
import HomeScreenHeader from '../../components/HomeScreenHeader';

const HomeScreen = ({navigation}) => {
  return (
    <>
    <HomeScreenHeader />
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#0066B3" barStyle="light-content" />


      {/* Welcome Section */}
      <View style={styles.welcomeContainer}>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Loan Limit</Text>
        <Text style={styles.amountText}>RS 30,000</Text>
        <Text style={styles.durationText}>Loan duration: 29 days</Text>

        <View style={styles.applyBtnCon}>

          <TouchableOpacity style={styles.applyBtn}>
            <Text style={styles.applyBtnText}>Apply</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.chooseBtn}>
            <Text style={styles.chooseBtnText}>Choose Amount</Text>
            <Icon2 name="arrow-forward" size={16} color="#0066B3" />
          </TouchableOpacity>
        </View>
      </View>
      <LoanComponent />

    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  welcomeContainer: {
    backgroundColor: '#0066B3',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute',
    height: 100,
    top: 0,
    right: 0,
    left: 0
  },
  wrapper: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 15,
  },

  title: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'Sen-SemiBold'
  },
  amountText: {
    color: 'black',
    fontSize: 28,
    fontFamily: 'Sen-Medium',
    marginVertical: 5,
  },
  durationText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 15,
    fontFamily: 'Sen-Medium',

  },
  applyBtnCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  applyBtn: {
    backgroundColor: '#0066B3',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 30
  },
  applyBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Sen-Medium',
  },
  chooseBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  chooseBtnText: {
    color: '#0066B3',
    fontSize: 16,
    marginRight: 5,
    fontFamily: 'Sen-Medium',

  },

});

export default HomeScreen;
