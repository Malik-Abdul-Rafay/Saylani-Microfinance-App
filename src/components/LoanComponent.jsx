import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const LoanComponent = () => {
  return (
    <View style={styles.container}>
      {/* Eligible Loan Section */}
      <Text style={styles.sectionHeader}>Eligible Loan</Text>

      {/* Quick Loan - Salaried */}
      <View style={styles.loanBox}>
        <Text style={styles.loanTitle}>Quick Loan - Salaried</Text>
        <Text style={styles.loanAmount}>Up to $5000/-</Text>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
        <Text style={styles.tenure}>Tenure up to 30 days</Text>
      </View>

      {/* Personal Loan - Salaried */}
      <View style={styles.loanBox}>
        <Text style={styles.loanTitle}>Personal Loan - Salaried</Text>
        <Text style={styles.loanAmount}>Up to $10,000/-</Text>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
        <Text style={styles.tenure}>Tenure up to 24 months</Text>
      </View>
      <View style={styles.alertText}>
      <View style={styles.alertBox}>
        <View style={styles.alertContent}>
          <View>
            <View style={styles.alertAndCloseCon}>
          <Text style={styles.alertText1}>
            Alert!
          </Text>
          <TouchableOpacity>
          <Icon name="close" size={23} color="red" />
        </TouchableOpacity>
        </View>
          <Text style={styles.alertText2}>
            Please kindly complete your video e-kyc to apply quick loans.
          </Text>
          </View>
        </View>
   
      </View>

      </View>


      {/* Upcoming Loan Section */}
      <Text style={styles.sectionHeader}>Upcoming Loan</Text>

      {/* Personal Loan - Salaried */}
      <View style={styles.loanBox}>
        <Text style={styles.loanTitle}>Personal Loan - Salaried</Text>
        <Text style={styles.loanAmount}>Up to $5,00,000</Text>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
        <Text style={styles.tenure}>Tenure up to 48 months</Text>
      </View>

      {/* Business Loan */}
      <View style={styles.loanBox}>
        <Text style={styles.loanTitle}>Business Loan</Text>
        <Text style={styles.loanAmount}>Up to $8,00,000</Text>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
        <Text style={styles.tenure}>Tenure up to 60 months</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#eaeaea',
  },
  sectionHeader: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 12,
    fontFamily: 'Sen-Bold',
  },
  loanBox: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor:'#FFF'
  },
  loanTitle: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 8,
    fontFamily: 'Sen-SemiBold',
  },
  loanAmount: {
    fontSize: 18,
    color: '#007bff',
    marginBottom: 8,
    fontFamily: 'Sen-SemiBold',
  },
  applyButton: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 8,
  },
  applyButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Sen-Bold',
  },
  tenure: {
    fontSize: 15,
    color: '#666666',
    fontFamily: 'Sen-SemiBold',
  },
  alertBox: {
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderLeftWidth: 4,
    borderLeftColor: '#ff0000',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alertContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  alertIcon: {
    marginRight: 8,
  },
  alertAndCloseCon:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  alertText1: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Sen-SemiBold',
    flexShrink: 1,
  },
  alertText2: {
    fontSize: 14,
    color: '#ff0000',
    fontFamily: 'Sen-Medium',
    flexShrink: 1,
    paddingTop: 3
  },
});

export default LoanComponent;