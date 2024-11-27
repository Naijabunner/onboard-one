import { InputModeOptions, KeyboardAvoidingView, NativeSyntheticEvent, Platform, Pressable, ScrollView, StyleProp, StyleSheet, Text, TextInput, TextInputChangeEventData, View, ViewProps } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
type inputProps={
    label?:string,
    name:string,
    placeholder?:string,
    type:InputModeOptions,
    isSecret:boolean,
    style: StyleProp<ViewProps>
    onChange:(name:string,value:string)=>void,
}

const Input: React.FC<inputProps> = ({ label, name, placeholder,type,isSecret, onChange, style }) => {
  const [visible, setVisible] = useState(isSecret)

function handleToggleVisibel() {
   setVisible(prev=> !prev )
}

function handleOnchange(value: string){
  console.log(name,value)
  onChange(name,value)
}

  // add more input modes depending on your form as far as your form doesn't use inputomode=text
  const customInputmode: InputModeOptions[]=['email']
  const inputmode=!customInputmode.includes(type) ? type : 'text'
  return (
    <ScrollView>
    <KeyboardAvoidingView
   behavior='position'
    >
  <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View>
      <View style={[styles.inputContainer, {borderWidth: 2, borderColor:'#df1d1d'}, style]}>
        <TextInput
          style={{ fontSize: 15, fontWeight: "medium" , flex:1}}
          placeholder={placeholder}
          inputMode={inputmode}
          secureTextEntry={isSecret ?visible: isSecret}
          onChangeText={(value)=>handleOnchange(value)}
        />
       {isSecret && <Pressable onPress={handleToggleVisibel} >
        <Ionicons name={visible?'eye-off-outline':'eye-outline'} size={24}/>
        </Pressable>}
        
      </View>
      <Text style={{ fontSize:16, marginVertical:0, color:'#df1d1d' }}>
          password is not correct
        </Text>
      </View>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Input

const styles = StyleSheet.create({
    container:{
        borderColor:'black',
        gap:10,
    },
    label:{
        fontSize:16,
        fontWeight:'bold',
        color:Colors['primary-500']
    },
    inputContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
        borderColor:Colors['primary-500'],
        borderWidth:2,
        paddingHorizontal:20,
        paddingVertical:1,
        borderRadius:5
    },
    visibleButton:{},
})