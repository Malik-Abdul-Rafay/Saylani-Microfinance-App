// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import Icon1 from 'react-native-vector-icons/Ionicons';
// import axios from 'axios';

// export default LoansScreen = () => {
//   const [activeTab, setActiveTab] = useState('Active');
//   // const [leavesData, setLeavesData] = useState({ active: [], completed: [] });
//   const [loanSummary, setLoanSummary] = useState('')
//   const loansData = {
//     active: [
//       {
//         loanID: 1,
//         startDate: '2024-02-05',
//         endDate: '2024-08-05', // 6 months loan period
//         status: 'Active',
//         loanPeriod: 6, // in months
//         approvedBy: 'Manager John',
//         loanAmount: 500000,
//         remainingBalance: 300000,
//         nextDuePayment: '2024-03-05',
//       },
//       {
//         loanID: 2,
//         startDate: '2024-03-01',
//         endDate: '2024-08-01', // 5 months loan period
//         status: 'Active',
//         loanPeriod: 5,
//         approvedBy: null, // Still under review
//         loanAmount: 200000,
//         remainingBalance: 150000,
//         nextDuePayment: '2024-04-01',
//       },
//     ],
//     completed: [
//       {
//         loanID: 3,
//         startDate: '2023-12-10',
//         endDate: '2024-06-10', // 6 months loan completed
//         status: 'Completed',
//         loanPeriod: 6,
//         approvedBy: 'HR Sarah',
//         loanAmount: 300000,
//         totalRepaid: 300000,
//       },
//       {
//         loanID: 4,
//         startDate: '2023-11-20',
//         endDate: '2024-05-20', // 6 months loan completed
//         status: 'Completed',
//         loanPeriod: 6,
//         approvedBy: 'Manager David',
//         loanAmount: 450000,
//         totalRepaid: 450000,
//       },
//     ],
//   };
  
  

//   const renderLeaveItem = ({ item }) => (
//     <View style={styles.LeaveCard}>
//       <View style={styles.dateStatusContainer}>
//         <View>
//           <Text style={styles.date1}>Date:</Text>
//           <Text style={styles.date}>
//             {new Date(item.StartDate).toLocaleDateString()} - {new Date(item.EndDate).toLocaleDateString()}
//           </Text>
//         </View>
//         <Text style={[styles.status, item.Status === 'Approved' ? styles.approved : styles.rejected]}>
//           {item.Status}
//         </Text>
//       </View>
//       <View style={styles.text1text2Container}>
//         <View>
//           <Text style={styles.text1}>Loan Category</Text>
//           <Text style={styles.text2}>{item.loanPeriod} Days</Text>
//         </View>
//         <View>
//           <Text style={styles.text1}>Loan ID</Text>
//           <Text style={styles.text2}>{item.ApprovedBy || 'N/A'}</Text>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Leave Summary Cards */}
//       <View style={styles.statusCardsContainer}>
//         <View style={[styles.statusCard, styles.blueBorder]}>
//           <View style={styles.statusTitle}>
//             <Text style={styles.statusTitleText}>Total Loans</Text>
//             <Text style={styles.statusTitleText}>Taken</Text>
//           </View>
//           <Text style={[styles.statusNumber]}>{loanSummary.LeavesBalance  || '00'}</Text>
//         </View>
//         <View style={[styles.statusCard, styles.greenBorder]}>
//           <View style={styles.statusTitle}>
//             <Text style={styles.statusTitleText}>Total Loan</Text>
//             <Text style={styles.statusTitleText}>Amount</Text>
//           </View>
//           <Text style={[styles.statusNumber]}>{loanSummary.LeavesApproved  || '00'}</Text>
//         </View>
//         <View style={[styles.statusCard, styles.aquaBorder]}>
//           <View style={styles.statusTitle}>
//             <Text style={styles.statusTitleText}>Total Loan</Text>
//             <Text style={styles.statusTitleText}>Repaid</Text>
//           </View>
//           <Text style={[styles.statusNumber]}>{loanSummary.LeavesPending  || '00'}</Text>
//         </View>
//         <View style={[styles.statusCard, styles.redBorder]}>
//           <View style={styles.statusTitle}>
//             <Text style={styles.statusTitleText}>Remaining</Text>
//             <Text style={styles.statusTitleText}>Balance</Text>
//           </View>
//           <Text style={[styles.statusNumber]}>{loanSummary.LeavesCancelled  || '00'}</Text>
//         </View>
//       </View>

//       {/* Tabs */}
//       <View style={styles.tabsContainer}>
//         <TouchableOpacity onPress={() => setActiveTab('Active')} style={[styles.inactiveTab, activeTab === 'Active' && styles.activeTab]}>
//           <Text style={activeTab === 'Active' ? styles.activeTabText : styles.inactiveTabText}>Active</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setActiveTab('Completed')} style={[styles.inactiveTab, activeTab === 'Completed' && styles.activeTab]}>
//           <Text style={activeTab === 'Completed' ? styles.activeTabText : styles.inactiveTabText}>Completed</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Conditional rendering of tabs */}
//       {activeTab === 'Active' && (
//         <FlatList
//           data={leavesData.upcoming}
//           renderItem={renderLeaveItem}
//           keyExtractor={(item) => item.LeaveID.toString()}
//           style={styles.listContainer}
//         />
//       )}

//       {activeTab === 'Completed' && (
//         <FlatList
//           data={leavesData.past}
//           renderItem={renderLeaveItem}
//           keyExtractor={(item) => item.LeaveID.toString()}
//           style={styles.listContainer}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   statusCardsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//     paddingHorizontal: 20,
//   },
//   statusCard: {
//     borderRadius: 8,
//     margin: 4,
//     backgroundColor: '#f8f9fa',
//     width: '47%',
//     padding: 6,
//   },
//   blueBorder: {
//     borderColor: '#007bff',
//     borderWidth: 1,
//   },
//   greenBorder: {
//     borderColor: '#28a745',
//     borderWidth: 1,
//   },
//   aquaBorder: {
//     borderColor: '#17a2b8',
//     borderWidth: 1,
//   },
//   redBorder: {
//     borderColor: '#dc3545',
//     borderWidth: 1,
//   },
//   statusTitle: {
//     flexDirection: 'column',
//     marginBottom: 8,
//   },
//   statusTitleText: {
//     fontSize: 17,
//     fontFamily: 'Sen-SemiBold',
//     color: 'black',
//   },
//   statusNumber: {
//     fontSize: 24,
//     fontFamily: 'Sen-Bold',
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//     borderRadius: 8,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     borderBottomColor: '#6c757d',
//     borderBottomWidth: 1,
//   },
//   activeTab: {
//     borderBottomWidth: 2,
//     paddingBottom: 12,
//   },
//   inactiveTab: {
//     width: '50%',
//   },
//   activeTabText: {
//     fontFamily: 'Sen-SemiBold',
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   inactiveTabText: {
//     color: '#6c757d',
//     fontFamily: 'Sen-SemiBold',
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   listContainer: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     backgroundColor: '#F3F3F3',
//     paddingBottom: 7,
//     height:'100%'
//   },
//   LeaveCard: {
//     backgroundColor: 'white',
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//   },
//   dateStatusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   date: {
//     fontSize: 15,
//     color: 'black',
//     fontFamily: 'Sen-Bold',
//     marginTop: 2,
//   },
//   date1: {
//     fontSize: 15,
//     color: '#6c757d',
//     fontFamily: 'Sen-SemiBold',
//   },
//   text1text2Container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingTop: 3,
//     borderTopWidth: 3,
//     marginTop: 6,
//     borderColor: '#F7F7F8',
//   },
//   text1: {
//     fontSize: 14,
//     color: '#6c757d',
//     fontFamily: 'Sen-SemiBold',
//   },
//   text2: {
//     fontSize: 14,
//     color: 'black',
//     fontFamily: 'Sen-Medium',
//   },
//   status: {
//     fontSize: 16,
//     padding: 4,
//     borderRadius: 5,
//     fontFamily: 'Sen-SemiBold',
//   },
//     approved: {
//       color: '#28a745',
//       backgroundColor: '#f5fcfb'
//     },
//     rejected: {
//       color: '#dc3545',
//       backgroundColor: '#fff6f5'
//     },
//     approvedText: {
//       color: '#28a745',
//       fontFamily: 'Sen-SemiBold', 
//     },
// });




import { View, Text } from 'react-native'
import React from 'react'

const LoansScreen = () => {
  return (
    <View>
      <Text>LoansScreen</Text>
    </View>
  )
}

export default LoansScreen