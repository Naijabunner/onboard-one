import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants/Colors'

type buttonProps={
    style?: StyleProp<ViewStyle>,
    pressStyle?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>
    title: string,
    onPress: ()=>void
}

const Button:React.FC<buttonProps> = ({ style, textStyle, title , onPress ,pressStyle}) => {

  return (
    <Pressable onPress={onPress} style={({pressed})=>[styles.button,style, pressed && styles.press ,pressStyle]} >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button

const styles = StyleSheet.create({
    button:{
        backgroundColor:Colors['primary-500'],
        height:50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:"center"
      },
      buttonText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
      },
      press:{
        opacity:0.5
      }
})