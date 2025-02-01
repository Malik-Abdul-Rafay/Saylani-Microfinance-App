import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LabelHeader = ({title}) => {
  return (
    <View style={styles.continer}>
      <Text  style={styles.continerText}>All Loans History</Text>
    </View>
  )
}

export default LabelHeader

const styles = StyleSheet.create({
    continer:{
        justifyContent:'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom:15,
        backgroundColor:'#FFF'
    },
    continerText:{
        fontSize: 20,
        fontFamily:'Sen-Bold',
        color:'black'
    }
})