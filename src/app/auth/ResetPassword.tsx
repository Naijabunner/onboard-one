import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'

const ResetPassword = () => {
  return (
    <View style={styles.container} >
      <Input 
      label='Password'
      type='text'
      name='password'
      isSecret={true}
      />
      <Input 
      label='Password'
      type='text'
      name='password'
      isSecret={true}
      />
      <Button title='Submit' style={{ marginTop:100}}/>
    </View>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
  container:{
    flex:1,
     marginHorizontal:'auto',
    maxWidth:500, 
    width:'100%',
    paddingHorizontal:20,
    rowGap:20,
    marginTop:30
  }
})