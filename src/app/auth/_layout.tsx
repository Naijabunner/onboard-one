import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import ButtonsIcon from '../../components/ui/buttonsIcon'

const Layout = () => {
  return (
    <Stack initialRouteName='SignUp'>
      <Stack.Screen
        name='SignUp'
        options={{
          headerShown: true,
          title: "ewewe",
          contentStyle: { backgroundColor: "white" },
        }}
      />
      <Stack.Screen
        name='onboard'
        options={{
          headerShown: false,
          title: "ewewe",
          contentStyle: { backgroundColor: "white" },
        }}
      />
      <Stack.Screen
        name='SignIn'
        options={{
          headerShown: true,
          title: "ewewe",
          contentStyle: { backgroundColor: "white" },
        }}
      />
      <Stack.Screen
        name='VerifyEmailAddress'
        options={{
          headerShown: true,
          title: "Verify your email address",
          contentStyle: { backgroundColor: "white" },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <ButtonsIcon
                onPress={""}
                name={"chevron-back-outline"}
                size={24}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name='ResetPassword'
        options={{
          headerShown: true,
          title: "Reset password",
          contentStyle: { backgroundColor: "white" },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <ButtonsIcon
                onPress={""}
                name={"chevron-back-outline"}
                size={24}
              />
            );
          },
        }}
      />
    </Stack>
  );
}

export default Layout

const styles = StyleSheet.create({})