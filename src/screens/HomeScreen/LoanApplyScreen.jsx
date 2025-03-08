import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Modal, FlatList } from 'react-native';
import axios from 'axios';
import Slider from '@react-native-community/slider';
import Icon1 from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';


const LoanApplyScreen = ({ route, navigation }) => {
  const { categoryDetail } = route.params;
  const [loanAmount, setLoanAmount] = useState(5000);
  const [debouncedLoanAmount, setDebouncedLoanAmount] = useState(loanAmount);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [initialDeposit, setInitialDeposit] = useState('0');
  const [modalSearchQuery, setModalSearchQuery] = useState('');
  const [loanResult, setLoanResult] = useState(null);
  const [loanTenure, setLoanTenure] = useState(7);


  const handleItemSelect = (item) => {
    setSearchQuery(item);
    setShowModal(false);
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleBackPress = () => {
    if (!isClicked) {
      setIsClicked(true);
      navigation.goBack();
    }
  };

  const filteredItems = categoryDetail.subcategories.filter(item =>
    item.toLowerCase().includes(modalSearchQuery.toLowerCase()));

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedLoanAmount(loanAmount);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [loanAmount]);

  const convertToMonths = (value) => {
    return Math.round(value * 12);
  };
  const convertToYear = (value) => {
    return value / 12;
  };
  const handleCalculate = async () => {
    
    const data = {
      category_id: parseInt(categoryDetail._id),  
      subcategory: searchQuery,  
      loan_amount: parseFloat(loanAmount),  
      initial_deposit: parseFloat(initialDeposit),  
      loan_period: parseFloat(convertToYear(loanTenure)),   
    };        
  
    try { 
      const response = await axios.post('http://192.168.253.122:8000/calculate_loan', data);
      setLoanResult(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.error(error);
      console.error("Ye Raha",response.data);
      
     
    }
  };


  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={styles.chevronIconContainer}
            onPress={handleBackPress}
            disabled={isClicked}
          >
            <Icon1 name="chevron-small-left" size={30} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Apply Loan</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>{categoryDetail.name}</Text>

          <View style={styles.loanBox}>
            <Text style={styles.loanText}>Your approved loan amount Up to</Text>
            <Text style={styles.loanAmount}>RS. {loanAmount}/-</Text>
            <Slider
              style={styles.slider}
              minimumValue={5000}
              maximumValue={categoryDetail.max_loan} 
              step={500}
              value={debouncedLoanAmount}  
              onValueChange={setLoanAmount} 
              minimumTrackTintColor="#0066B3"
              maximumTrackTintColor="gray"
              thumbTintColor="#0066B3"
              thumbStyle={styles.thumb} 
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label10}>Select Sub-Category</Text>
            <View style={styles.searchRow}>
              <TouchableOpacity
                style={styles.searchRow2}
                onPress={() => {
                  setShowModal(true);
                  setModalSearchQuery('');
                }}
              >
                <TextInput
                  placeholder="*(sub-category)"
                  style={styles.input10}
                  value={searchQuery}
                  editable={false}
                  placeholderTextColor='gray'
                />
                <MaterialCommunityIcons name="chevron-down" size={28} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label10}>Initial Deposit</Text>
            <View style={styles.searchRow}>
              <View style={styles.searchRow2}>
                <Text style={styles.label11}>Rs:</Text>
                <TextInput
                  placeholder="*(0000)"
                  style={styles.input10}
                  value={initialDeposit}
                  onChangeText={setInitialDeposit}
                  placeholderTextColor='gray'
                  keyboardType='number-pad'
                />
                <Icon3 name="edit" size={20} color="#000" />
              </View>
            </View>


            <View style={styles.loanBox2}>

            <View style={styles.tenureContainer}>
    <Text style={styles.tenureLabel}>Select Loan Tenure (Months):</Text>
    <Picker
      selectedValue={loanTenure}
      style={styles.picker}
      onValueChange={(itemValue) => setLoanTenure(itemValue)}
    >
      {[...Array(convertToMonths(categoryDetail.max_period))].map((_, index) => (
        <Picker.Item key={index} label={`${index + 1} Month`} value={index + 1} />
      ))}
    </Picker>
  </View>
</View>


          </View>

          <TouchableOpacity style={styles.button} onPress={handleCalculate}>
            <Text style={styles.buttonText}>Calculate</Text>
          </TouchableOpacity>

          {loanResult && (
  <View style={styles.resultContainer}>
    <Text style={styles.resultTitle}>Loan Calculation Result</Text>
    <View style={styles.resultBox}>
      <View style={styles.resultRow}>
        <Text style={styles.resultLabel}>Total Loan:</Text>
        <Text style={styles.resultValue}>Rs. {loanResult.total_loan.toFixed(2)}/-</Text>
      </View>
      <View style={styles.resultRow}>
        <Text style={styles.resultLabel}>Monthly:</Text>
        <Text style={styles.resultValue}>Rs. {loanResult.monthly_payment.toFixed(2)}/-</Text>
      </View>
      <View style={styles.resultRow}>
        <Text style={styles.resultLabel}>Total:</Text>
        <Text style={styles.resultValue}>Rs. {loanResult.total_payment.toFixed(2)}/-</Text>
      </View>
    </View>
  </View>
)}

        </View>   
      </ScrollView>   
      
      <Modal  
        visible={showModal}  
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer3}>
          <View style={styles.modalContent3}>
            <Text style={styles.modalTitle3}>Select Sub-Category</Text>
            <View style={styles.searchContainer3}>
              <MaterialCommunityIcons name="magnify" size={28} color="#09314A" />
              <TextInput
                style={styles.searchInput3}
                placeholder="Search Sub-Category.."
                placeholderTextColor="#DEDEDE"
                maxLength={50}
                value={modalSearchQuery}
                onChangeText={(text) => setModalSearchQuery(text)}
                selectTextOnFocus={true}
              />
            </View>
            {filteredItems.length > 0 ? (
              <FlatList
                data={filteredItems}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => handleItemSelect(item)}
                    style={[styles.customerItem, index === filteredItems.length - 1 && styles.lastCustomerItem]}
                  >
                    <Text style={styles.customerName}>{item}</Text>
                  </TouchableOpacity>
                )}
                keyboardShouldPersistTaps="handled"
              />
            ) : (
              <View style={styles.notFoundContainer}>
                <Text style={styles.notFoundText}>Not Found</Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E8F5E9', padding: 15 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 14,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#E8F5E9',
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
    backgroundColor: '#FFF',
  },
  headerTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Sen-Bold',
  },
  slider: {
    width: '100%',
    height: 10,
    borderRadius: 5,
  },
  thumb: {
    width: 25,
    height: 25,
    borderRadius: 10,
    backgroundColor: '#0066B3',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  card: { backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 15, borderRadius: 15 },
  title: { fontSize: 21, fontFamily: 'Sen-Bold', color: '#333', textAlign: 'center' },
  amount: { fontSize: 30, fontFamily: 'Sen-Bold', color: '#0066B3', marginVertical: 5 },
  loanText: { fontSize: 16, color: '#666', fontFamily: 'Sen-Medium' },
  loanAmount: { fontSize: 26, fontFamily: 'Sen-Bold', color: '#0066B3', marginVertical: 5 },
  featureTitle: { fontSize: 19, fontFamily: 'Sen-Bold',},
  button: { backgroundColor: '#0066B3', paddingVertical: 12, borderRadius: 10, alignItems: 'center', marginTop: 18 },
  buttonText: { color: 'white', fontSize: 18, fontFamily: 'Sen-Bold' },
  inputContainer: {
    marginTop: 12
  },
  label10: {
    fontFamily: 'Sen-SemiBold',
    fontSize: 15,
    color: 'black',
    marginBottom: 6,
    position: 'absolute',
    zIndex: 1,
    left: 10,
    top: '-9',
    paddingHorizontal: 4,
    backgroundColor: '#FFF',
  },
  label11: {
    fontFamily: 'Sen-Medium',
    fontSize: 17,
    color: 'black',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    height: 45,
  },
  searchRow2: {
    flexDirection: 'row',
    borderColor: '#E5E5E5',
    borderWidth: 1.5,
    borderRadius: 12,
    height: 45,
    paddingLeft: 8,
    paddingRight: 8,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input10: {
    fontFamily: 'Sen-Medium',
    fontSize: 16,
    flex: 1
  },
  modalContainer3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent3: {
    width: '90%',
    maxHeight: '80%',
    minHeight: '80%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
  },


  searchContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
  },
  searchInput3: {
    flex: 1,
    fontFamily: 'Sen-Medium',
    fontSize: 15,
    color: '#000',
    marginLeft: 8,
  },
  customerItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  lastCustomerItem: {
    marginBottom: 100
  },
  customerName: {
    fontFamily: 'Sen-Medium',
    fontSize: 16,
    color: '#000',
  },

  notFoundContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  notFoundText: {
    fontFamily: 'Sen-Medium',
    fontSize: 16,
    color: 'red',
  },
  closeButton: {
    marginTop: 12,
    backgroundColor: '#09314A',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 24,
    marginHorizontal: 15
  },
  closeButtonText: {
    fontFamily: 'Sen-Bold',
    fontSize: 16,
    color: '#FFF',
  },
  modalTitle3: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: 'Sen-Bold',
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
  },
  resultTitle: {
    fontSize: 18,
    fontFamily: 'Sen-Bold',
    color: '#0066B3',
    textAlign: 'center',
    marginBottom: 10,
  },
  resultBox: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  resultLabel: {
    fontSize: 16,
    fontFamily: 'Sen-Medium',
    color: '#333',
  },
  resultValue: {
    fontSize: 16,
    fontFamily: 'Sen-Bold',
    color: '#0066B3',
  },
  loanBox: { marginVertical: 15, alignItems: 'center' },
  loanBox2: {
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 20
  },
  tenureContainer: {
    marginVertical: 10,
  },
  tenureLabel: {
    fontSize: 16,
    fontFamily: 'Sen-Bold',
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
    borderRadius: 20

  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingLeft: 10,
    backgroundColor: '#fff',


  },

  

  

});

export default LoanApplyScreen;
