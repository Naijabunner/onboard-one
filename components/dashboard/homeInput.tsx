import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../../src/components/ui/input'
import { Colors } from '../../constants/Colors'

const HomeInput = () => {
  return (
    <Input
    style={{ borderColor:Colors['primary-500'], borderRadius:25, marginVertical:10, borderWidth:1 }}
    />
  )
}

export default HomeInput

const styles = StyleSheet.create({})