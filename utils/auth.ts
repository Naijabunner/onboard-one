import AsyncStorage from "@react-native-async-storage/async-storage"
import { parse } from "expo-linking"
import { Alert } from "react-native"

export type SignUpProps={
    name:string,
    email:string,
    password:string
}
export const signUpHandler =async(userData: SignUpProps)=>{
    let statusCode;
    try {
        await new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 1000);
        })
        const strigifyValue= JSON.stringify(userData)
        await AsyncStorage.setItem('user',strigifyValue)
        statusCode= 200
    } catch (error) {
        Alert.alert(
              'sign up',
            'something Went wrong '
        )
    }
    finally{
        return statusCode
    }
}

export const signInHandler =async(email:string,password:string)=>{
    let statusCode;
    try {
        await new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 1000);
        })
        const dataFromStorage= await AsyncStorage.getItem('user')

        if (!dataFromStorage) {
            throw (404)  
        }

        const parseValue= JSON.parse(dataFromStorage)

        const transformedData= {
            email: parseValue?.email,
            password: parseValue?.password
        }
        const emailIsCorrect= transformedData.email.toLowerCase() === email.toLowerCase()
        const passwordIsCorrect= transformedData.password === password
            if (emailIsCorrect && passwordIsCorrect) {
                statusCode= 200
            }else{
                throw ('something Went Wrong')
            }
        
    } catch (error) {
        Alert.alert(
            'sign in',
            'something Went wrong '
        )
    }
    finally{
        return statusCode
    }
}


export const isRegistered= async()=>{
    const userDetails =await AsyncStorage.getItem('user')
    return !!userDetails
}