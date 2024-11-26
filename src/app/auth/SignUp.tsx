import { Image, KeyboardAvoidingView, NativeSyntheticEvent, Pressable, ScrollView, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Colors } from '../../../constants/Colors'
import { Link, Stack, useRouter } from 'expo-router'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import { SignUpForm } from '../../../data/authForms'
import { RoutePathMap } from '../../../constants/Paths'
import LogoHeader from '../../components/ui/LogoHeader'
import BottomSheetComponent from '../../components/ui/bottomSheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { signUpHandler, SignUpProps } from '../../../utils/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'



const SignUp = () => {
const router = useRouter()
const [signUpInput, setsignUpInput] = useState<SignUpProps>(
  {
    name: '',
    email: '',
    password: ''
  }
)

function handlePress(){
 router.replace(RoutePathMap.get('signin'))
  }

  async function handleSubmit(){
   const response= await signUpHandler(signUpInput)
  const check= await AsyncStorage.getItem('user')
   console.log(check)
  //  router.navigate('/auth/VerifyEmailAddress')
  }

  const handleOnchangeInput=(name:string, value:string)=>{
  // @ts-ignore
    setsignUpInput({...signUpInput, [name]:value})
  }

  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView >
        <KeyboardAvoidingView
          behavior='position'
        >
          <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <LogoHeader title='Create An Account' />
            <View style={styles.formContainer}>
              {SignUpForm.map(
                ({ title, placeholder, name, type, isSecret }, index) => {
                  return (
                    <Input
                      label={title}
                      name={name}
                      key={index}
                      placeholder={placeholder}
                      type={type}
                      isSecret={isSecret}
                      onChange={handleOnchangeInput}
                    />
                  );
                }
              )}
              <Button title='SIGN UP' onPress={handleSubmit} style={styles.button} />
            </View>

            <Pressable onPress={handlePress} style={styles.redirectText}>
              <Text>
                Have an account already? <Text style={styles.spanText}>Log in</Text>
              </Text>
            </Pressable>
          </View>

        </KeyboardAvoidingView>
      </ScrollView>

    </View>
   
  );
}

export default SignUp

const styles = StyleSheet.create({
    container:{
      flex:1,
        alignItems:'center',
        marginTop:30
    },
    formContainer:{
        width:'100%',
        marginTop:65,
        paddingHorizontal:20,
        rowGap:10
    },
    button:{
      backgroundColor:Colors['primary-500'],
      height:50,
      borderRadius:10,
      justifyContent:'center',
      alignItems:"center",
      marginTop: 50
    },
    redirectText:{
      fontSize:14,
      fontWeight:'medium',
      paddingTop:20
    },
    spanText:{
        color:Colors['primary-500'],
        fontWeight: 'bold'
    },
    
})