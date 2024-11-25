import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'

const Root = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="dark" backgroundColor='white' />
      <Stack initialRouteName='auth'>
        <Stack.Screen name='index' options={{ headerShown: false, title: "Category" }} />
        <Stack.Screen name='auth' options={{ headerShown: false, title: "" }} />
        {/* <Stack.Screen name='Home' options={{ headerShown: false, title: "" }} /> */}
      </Stack>
    </GestureHandlerRootView>
  )
}

export default Root

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: Colors['primary-500'] },
});