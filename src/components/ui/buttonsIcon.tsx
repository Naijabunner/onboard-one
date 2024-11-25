//@ts-nocheck
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'


interface buttonIconsProps{

}
const ButtonsIcon = ({ name, size, style, iconStyle, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.press}>
      <Ionicons name={'chevron-back-outline'} size={24}/>
    </Pressable>
  )
}

export default ButtonsIcon

const styles = StyleSheet.create({
    press:{

    }
})