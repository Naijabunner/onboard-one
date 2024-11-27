import React from 'react'
import { Image, View } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
const DashboardHeader = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent:'space-between', marginVertical:15}}>
        <Ionicons name='grid' size={36} color={Colors['primary-500']}/>
         <View style={{ width:36, height:36, backgroundColor:Colors['primary-500'], borderRadius:'100%'}}>

        </View> 
    </View>
  )
}

export default DashboardHeader