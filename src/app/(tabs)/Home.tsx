import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import LogoHeader from '../../components/ui/LogoHeader'
import Input from '../../components/ui/input'
import DashboardHeader from '../../../components/dashboard/dashboardHeader'
import { Colors } from '../../../constants/Colors'
import DashboardWelcomeTitle from '../../../components/dashboard/dashboardWelcomeTitle'
import CoursePicker from '../../../components/dashboard/coursePicker'
import HomeInput from '../../../components/dashboard/homeInput'
import ProductDetails from '../../../components/dashboard/productDetails'
import HomeBanner from '../../../components/dashboard/homeBanner'

const Home = () => {
  return (
    <View style={{ flex:1, backgroundColor:'white'}}>
    <View style={{ marginHorizontal: 20, }}>
      <StatusBar translucent={false} />
      <Stack.Screen options={{ headerShown: false, contentStyle: { backgroundColor: 'white' } }} />
      <DashboardHeader />
      <DashboardWelcomeTitle />
      <HomeInput />
      <HomeBanner/>
      <CoursePicker />
      <ScrollView>
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />
          <ProductDetails />  
      </ScrollView>
    
    </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})