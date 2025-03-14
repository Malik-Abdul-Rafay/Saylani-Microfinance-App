import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const LoanComponent = () => {
  const [loanCategories, setLoanCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();


  useEffect(() => {
    const fetchLoanCategories = async () => {
      try { 
        const response = await axios.get('http://192.168.253.122:8000/loan_categories');
        setLoanCategories(response.data.loan_categories);
        console.log(loanCategories); 
      } catch (error) {
        console.log('Error fetching loan categories:', error);
      } finally {  
        setLoading(false);
      }
    };

    fetchLoanCategories();
  }, []);

  const convertToMonths = (value) => {
    return Math.round(value * 12);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Eligible Loan</Text>
      {loanCategories
  .filter((category) => category.status === "eligible")
  .map((category) => (
    <View style={styles.loanBox} key={category._id}>
      <Text style={styles.loanTitle}>{category.name}</Text>
      <Text style={styles.loanAmount}>
        Up to RS. {category.max_loan.toLocaleString('en-PK')}
      </Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate('LoanApply', { categoryDetail: category })}  // Pass category details
        style={styles.applyButton}
      >
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
      <Text style={styles.tenure}>
        Tenure up to {convertToMonths(category.max_period)} months
      </Text>
    </View>
  ))}


        <View style={styles.alertBox}>
          <View style={styles.alertContent}>
            <View>
              <View style={styles.alertAndCloseCon}>
                <Text style={styles.alertText1}>Alert!</Text>
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
      <Text style={styles.sectionHeader}>Upcoming Loan</Text>
      {loanCategories
  .filter((category) => category.status === "upcoming")
  .map((category) => (
      <View style={styles.loanBox} key={category._id}>
      <Text style={styles.loanTitle}>{category.name}</Text>
      <Text style={styles.loanAmount}>
  Up to RS. {category.max_loan.toLocaleString('en-PK')}
</Text>
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
      <Text style={styles.tenure}>
      Tenure up to {convertToMonths(category.max_period)} months
      </Text>
    </View>
      ))} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#eaeaea',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#007bff',
    fontFamily: 'Sen-Bold',
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
    backgroundColor: '#FFF',
  },
  loanTitle: {
    fontSize: 17,
    color: '#000000',
    marginBottom: 8,
    fontFamily: 'Sen-SemiBold',
  },
  loanAmount: {
    fontSize: 16,
    color: '#007bff',
    marginBottom: 8,
    fontFamily: 'Sen-SemiBold',
  },
  tenure: {
    fontSize: 15,
    color: '#666666',
    fontFamily: 'Sen-SemiBold',
  },
  subcategoryText: {
    fontSize: 14,
    color: '#333',
    marginVertical: 4,
    fontFamily: 'Sen-Regular',
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
  alertAndCloseCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    paddingTop: 3,
  },
});

export default LoanComponent;
