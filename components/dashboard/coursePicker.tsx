import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const CoursePicker = () => {
  return (
    <View>
    <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems:'center', marginVertical:5, marginBottom:10 }}>
      <Text style={{ fontSize:22, fontWeight:'bold' }}>
        Course
      </Text>
      <Text style={{ fontSize:16, fontWeight:'medium', color:Colors['primary-500'] }}>
        View All
      </Text>
    </View>
     <View style={{ flexDirection:'row', gap:5}}>
     <TouchableOpacity style={{ backgroundColor:'blue',  alignSelf: "flex-start", paddingHorizontal:5.}}>
      <Text>
        ALL
        </Text> 
     </TouchableOpacity>
    </View>
  
    </View>
  )
}

export default CoursePicker

const styles = StyleSheet.create({})