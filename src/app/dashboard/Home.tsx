import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import LogoHeader from '../../components/ui/LogoHeader'

const Home = () => {
  return (
 <View>
  <StatusBar translucent={false}/>
        <Stack.Screen options={{ headerShown: false }} />
      <Text>Home</Text>
    </View>     
  )
}

export default Home

const styles = StyleSheet.create({})