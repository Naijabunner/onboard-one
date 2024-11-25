import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import Button from '../../components/ui/button'
import { OtpInput } from "react-native-otp-entry";
import { Colors } from '../../../constants/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const VerifyEmailAddress = () => {
  const snapPoints=useMemo(()=>['25%', '50%', '70%'], [])
  return (
    <View style={styles.container}>
      <BottomSheet
      snapPoints={snapPoints}
      >
        <Text>wawu</Text>
      </BottomSheet>
      <Text style={styles.title}>
        We sent you a 4 digit code to verify your email address{" "}
        <Text style={{ fontWeight: "bold" }}>(desx@gmail.com)</Text>
        .Enter in the field below.
      </Text>
      <OtpInput 
      numberOfDigits={4}
      secureTextEntry={true}
      textInputProps={{
        accessibilityLabel: "One-Time Password",
      }}
      theme={{
        containerStyle: styles.OTPcontainer,
        // pinCodeContainerStyle: styles.pinCodeContainer,
        // pinCodeTextStyle: styles.pinCodeText,
        // focusStickStyle: styles.focusStick,
        // focusedPinCodeContainerStyle: styles.activePinCodeContainer,
      }}
      />
      <Text style={styles.centerText}>Didn’t get the code? <Text style={{ fontWeight: "bold" }}>Resend</Text></Text>
      <Text style={styles.centerText}>Expires in <Text style={{ color: Colors['primary-500'] }}>01:00</Text></Text>
      <Button title='Submit' style={{marginTop:30}} />
    
    </View>
  );
}

export default VerifyEmailAddress

const styles = StyleSheet.create({
    container:{
      flex: 1,
        maxWidth:500,
        marginHorizontal:'auto',
        paddingHorizontal:20,
        marginTop:35,
    },
    title:{
        fontSize:16,
        textAlign:'center',
        fontWeight:'medium'
    },
    OTPcontainer:{
      justifyContent:'center',
      marginVertical: 20,
      columnGap:10
    },
    centerText:{
      textAlign:'center',
      marginTop:10
    },
    contentContainer: {
      flex: 1,
      padding: 36,
      alignItems: 'center',
      width: '100%'
    },
})