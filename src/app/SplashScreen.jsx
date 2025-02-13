import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react' 
import { useNavigation } from '@react-navigation/native'   
import img from '../../assets/images/logo.png'  
    
const SplashScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Parent'); 
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigation])

  return (
    <View style={styles.container}>
          <StatusBar backgroundColor="#0066B3" barStyle="light-content" />
      <Image  source={img} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image:{
    width:'70%',
    resizeMode:'contain'
  }
  ,
  title: {
    fontSize: 50,
    color: '#09314A',
    marginTop: 20,
    fontFamily:'Sen-SemiBold'
  },
})

export default SplashScreen